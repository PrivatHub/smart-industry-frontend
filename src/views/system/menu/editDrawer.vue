<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { addMenu, queryMenuTree, updateMenu } from '@/api/system/menu';
  import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
  import { BasicForm, useForm } from '@/components/Form';
  import { TreeItem } from '@/components/Tree';
  import { computed, ref, unref } from 'vue';
  import { formSchema, isDir } from './data';
  import { isHttpUrl } from '@/utils/is';

  defineOptions({ name: 'MenuDrawer' });

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);
  const treeData = ref<TreeItem[]>([]);

  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { lg: 12, md: 24 },
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    await resetFields();
    setDrawerProps({ confirmLoading: false });
    if (unref(treeData).length === 0) {
      const params = { onlyEnabled: true, withoutButton: true };
      treeData.value = (await queryMenuTree(params)) as any as TreeItem[];
    }
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      data.record.show = data.record.meta?.show || false;
      data.record.isExt = data.record.meta?.isExt || false;
      data.record.type = data.record.menuType.value;
      data.record.frameSrc = data.record.meta?.frameSrc;
      data.record.keepalive = data.record.meta?.keepalive || false;
      await setFieldsValue({
        ...data.record,
      });
    }
    await updateSchema({
      field: 'parentId',
      componentProps: { treeData },
    });
    console.log(data.record);
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单' : '编辑菜单'));

  async function handleSubmit() {
    try {
      const values = await validate();
      values.meta = {
        icon: values.icon,
        title: values.title,
        isExt: values.isExt,
        hidden: values.hidden,
        keepalive: values.keepalive,
      };
      if (isDir(values.type) && !isHttpUrl(values.path)) {
        values.component = 'Layout';
      }
      values.remark = values.remark || values.name;
      setDrawerProps({ confirmLoading: true });
      console.log(values);
      if (unref(isUpdate)) {
        await updateMenu(values);
      } else {
        await addMenu(values);
      }
      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
