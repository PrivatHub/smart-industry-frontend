<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :fieldNames="{ title: 'name', key: 'id' }"
          @check="onTreeChecked"
          checkable
          toolbar
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { computed, reactive, ref, unref } from 'vue';
  import { BasicForm, useForm } from '@/components/Form';
  import { formSchema } from './data';
  import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
  import { BasicTree, TreeItem } from '@/components/Tree';

  import { queryMenuTree } from '@/api/system/menu';
  import { addRole, updateRole } from '@/api/system/role';
  import { findLeafIds } from '@/utils/helper/treeHelper';
  import { useMessage } from '@/hooks/web/useMessage';

  const emit = defineEmits(['success', 'register']);
  const state = reactive({ checkedKeys: [] }) as any;
  const treeData = ref<TreeItem[]>([]);
  const { createErrorModal } = useMessage();
  const isUpdate = ref(true);

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    await resetFields();
    setDrawerProps({ confirmLoading: false });
    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(treeData).length === 0) {
      treeData.value = (await queryMenuTree({
        onlyEnabled: true,
        withoutButton: false,
      })) as any as TreeItem[];
    }
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      const ids = findLeafIds(data.record.menuIds, treeData.value, { pid: 'parentId' });
      data.record.menuIds = ids || [];
      state.checkedKeys = ids || [];
      await setFieldsValue({
        ...data.record,
      });
    }
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

  function onTreeChecked(checkedKeys, e) {
    state.checkedKeys = [...checkedKeys, ...e.halfCheckedKeys];
  }

  async function handleSubmit() {
    try {
      const values = await validate();
      if (!(state.checkedKeys && state.checkedKeys.length > 0)) {
        createErrorModal({
          title: '提交失败',
          content: '请配置角色权限',
          getContainer: () => document.body,
        });
        return;
      }
      values.menuIds = state.checkedKeys;
      setDrawerProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        await updateRole(values);
      } else {
        await addRole(values);
      }
      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
