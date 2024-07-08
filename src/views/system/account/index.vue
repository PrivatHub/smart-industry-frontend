<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <DeptTree class="w-1/3 xl:w-1/4" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/4" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
        <a-button type="primary" @click="handleExport">导出账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '查看用户详情',
                onClick: handleView.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
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
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from '@/components/Table';
  import { deleteAccount, queryAccount } from '@/api/system/account';
  import { columns, searchFormSchema } from './data';
  import { PageWrapper } from '@/components/Page';
  import { notification } from 'ant-design-vue';
  import { useModal } from '@/components/Modal';
  import { useGo } from '@/hooks/web/usePage';
  import AccountModal from './editModal.vue';
  import { t } from '@/hooks/web/useI18n';
  import DeptTree from './DeptTree.vue';
  import { reactive } from 'vue';

  defineOptions({ name: 'AccountManagement' });

  const go = useGo();
  const [registerModal, { openModal }] = useModal();
  const searchInfo = reactive<Recordable>({});
  const [registerTable, { reload, updateTableDataRecord, getSearchInfo }] = useTable({
    title: '账号列表',
    api: queryAccount,
    rowKey: 'id',
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
    },
    useSearchForm: true,
    showIndexColumn: false,
    showTableSetting: true,
    bordered: true,
    handleSearchInfoFn(info) {
      console.log('handleSearchInfoFn', info);
      return info;
    },
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
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
    deleteAccount(record).then(() => {
      notification.success({
        message: t('sys.api.deleteSucceeded'),
      });
      handleSuccess({ isUpdate: false, values: {} });
    });
  }

  function handleExport() {
    console.log('handleExport', getSearchInfo());
  }

  function handleSuccess({ isUpdate = false, values = {} } = {}) {
    if (isUpdate && values) {
      // 演示不刷新表格直接更新内部数据。
      // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
      const result = updateTableDataRecord(values.id, values);
      console.log('handleSuccess', result);
    } else {
      reload();
    }
  }

  function handleSelect(deptId = '') {
    searchInfo.deptId = deptId;
    reload();
  }
  function handleView(record: Recordable) {
    go('/system/account_detail/' + record.id);
  }
</script>
