import { BasicColumn, FormSchema } from '@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'name',
    align: 'left',
    width: 200,
  },
  {
    title: '成员数量',
    dataIndex: 'userCount',
    width: 80,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'enabled',
    width: 80,
    customRender: ({ record }) => {
      const enable = ~~record.enabled === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
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
    label: '部门名称',
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
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentId',
    label: '上级部门',
    component: 'TreeSelect',
    ifShow({ values }) {
      const { deptName, parentDept } = values;
      // Hide without a parentDept when editing
      return parentDept || (!deptName && !parentDept);
    },
    componentProps: {
      fieldNames: {
        label: 'name',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    defaultValue: 90,
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
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
