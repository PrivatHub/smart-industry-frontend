<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">{{ t('lang.button.create') }}</a-button>
        <a-button type="primary" @click="toggleExpandCollapse">{{
          isExpanded ? t('lang.button.collapse') : t('lang.button.expand')
        }}</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DeptModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from '@/components/Table';
  import { columns, searchFormSchema } from './data';
  import { deleteDept, queryDept } from '@/api/system/dept';
  import { useModal } from '@/components/Modal';
  import DeptModal from './editModal.vue';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useMessage } from '@/hooks/web/useMessage';
  import { nextTick, ref } from 'vue';

  const { t } = useI18n();
  const { notification } = useMessage();
  const isExpanded = ref(false);

  defineOptions({ name: 'DeptManagement' });

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload, expandAll, collapseAll }] = useTable({
    title: '部门列表',
    api: queryDept,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    isTreeTable: true,
    pagination: false,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      fixed: undefined,
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record: Recordable) {
    deleteDept(record, 'message').then(() => {
      notification.success({
        message: t('sys.api.operationSuccess'),
      });
      handleSuccess();
    });
  }

  function toggleExpandCollapse() {
    if (isExpanded.value) {
      collapseAll();
    } else {
      expandAll();
    }
    isExpanded.value = !isExpanded.value;
  }
  function onFetchSuccess() {
    nextTick(expandAll);
    isExpanded.value = true;
  }
  function handleSuccess() {
    reload();
  }
</script>
