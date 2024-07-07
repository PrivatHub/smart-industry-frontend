<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { addAccount, updateAccount } from '@/api/system/account';
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, useForm } from '@/components/Form';
  import { queryDeptTree } from '@/api/system/dept';
  import { queryRole } from '@/api/system/role';
  import { computed, ref, unref } from 'vue';
  import { accountFormSchema } from './data';

  defineOptions({ name: 'AccountModal' });

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);
  const rowId = ref('');

  const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: accountFormSchema,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 23,
    },
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    await resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      console.log(data.record);
      rowId.value = data.record.id;
      await setFieldsValue({
        ...data.record,
        roleIds: data.record.roleIds[0],
        departmentIds: data.record.departmentIds[0],
      });
    }

    const roles = await queryRole({ queryAll: true });
    const deptTree = await queryDeptTree();
    await updateSchema([
      {
        field: 'pwd',
        show: !unref(isUpdate),
      },
      {
        field: 'roleIds',
        componentProps: {
          options: roles,
          fieldNames: { label: 'name', value: 'id' },
        },
      },
      {
        field: 'departmentIds',
        componentProps: {
          treeData: deptTree,
          fieldNames: { label: 'name', value: 'id', children: 'children' },
        },
      },
    ]);
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));

  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      console.log(values);
      if (unref(isUpdate)) {
        await updateAccount(values);
      } else {
        await addAccount(values);
      }
      closeModal();
      emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
