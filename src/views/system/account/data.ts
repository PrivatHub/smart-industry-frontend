import { BasicColumn, FormSchema } from '@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    align: 'left',
  },
  {
    title: '真实姓名',
    dataIndex: 'realName',
  },
  {
    title: '所属部门',
    dataIndex: 'departmentName',
  },
  {
    title: '角色',
    dataIndex: 'roleName',
  },
  {
    title: '状态',
    dataIndex: 'enabled',
    width: 80,
    customRender: ({ record }) => {
      const enable = !!record.enabled;
      const color = enable ? 'green' : 'red';
      const text = enable ? '可用' : '禁用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdDate',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    labelWidth: 50,
    colProps: { span: 6 },
  },
  {
    field: 'realName',
    label: '真实姓名',
    component: 'Input',
    colProps: { span: 6, pull: 1 },
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '可用', value: 'true' },
        { label: '禁用', value: 'false' },
      ],
    },
    colProps: { span: 5, pull: 2 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
  },
  {
    field: 'realName',
    label: '真实姓名',
    component: 'Input',
    required: true,
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
  },
  {
    label: '角色关联',
    field: 'roleIds',
    component: 'ApiSelect',
  },
  {
    label: '所属部门',
    field: 'departmentIds',
    component: 'TreeSelect',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
