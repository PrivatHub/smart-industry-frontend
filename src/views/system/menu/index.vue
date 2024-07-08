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
    <MenuDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from '@/components/Table';
  import { deleteMenu, queryMenuTree } from '@/api/system/menu';
  import { useMessage } from '@/hooks/web/useMessage';
  import { columns, searchFormSchema } from './data';
  import { useDrawer } from '@/components/Drawer';
  import { useI18n } from '@/hooks/web/useI18n';
  import MenuDrawer from './editDrawer.vue';
  import { nextTick, ref } from 'vue';

  defineOptions({ name: 'MenuManagement' });

  const { t } = useI18n();
  const isExpanded = ref(false);
  const { notification } = useMessage();

  const [registerDrawer, { openDrawer }] = useDrawer();
  const [registerTable, { reload, expandAll, collapseAll }] = useTable({
    title: '菜单列表',
    api: queryMenuTree,
    beforeFetch: (params) => {
      params.onlyEnabled = false;
      params.withoutButton = false;
      return params;
    },
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
      // slots: { customRender: 'action' },
      fixed: undefined,
    },
  });

  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record: Recordable) {
    deleteMenu(record).then(() => {
      notification.success({
        message: t('sys.api.operationSuccess'),
      });
      handleSuccess();
    });
  }

  function handleSuccess() {
    reload();
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
    // 演示默认展开所有表项
    nextTick(expandAll);
    isExpanded.value = true;
  }
</script>
