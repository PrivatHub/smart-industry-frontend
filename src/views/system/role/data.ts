import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { updateRole } from '@/api/system/role';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicColumn, FormSchema } from '@/components/Table';

type CheckedType = boolean | string | number;
export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 200,
    align: 'left',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '成员数量',
    dataIndex: 'userCount',
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'enabled',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.enabled === true,
        checkedChildren: '启用',
        unCheckedChildren: '停用',
        loading: record.pendingStatus,
        onChange(checked: CheckedType) {
          record.pendingStatus = true;
          const newStatus = !!checked;
          const { createMessage } = useMessage();
          updateRole({ id: record.id, enabled: newStatus })
            .then(() => {
              record.enabled = newStatus;
              createMessage.success(`已成功修改角色状态`).then((r) => r);
            })
            .catch(() => {
              createMessage.error('修改角色状态失败').then((r) => r);
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdDate',
    width: 180,
  },
  {
    title: '更新时间',
    dataIndex: 'lastModifiedDate',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 8, pull: 1 },
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: 'true' },
        { label: '停用', value: 'false' },
      ],
    },
    colProps: { span: 8, pull: 2 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: '启用', value: true },
        { label: '停用', value: false },
      ],
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
  },
];
