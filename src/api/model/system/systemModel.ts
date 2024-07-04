import { BasicFetchResult } from '@/api/model/baseModel';

export interface DeptListItem {
  id: string;
  name: string;
  orderNo: string;
  createdDate: string;
  remark: string;
  status: boolean;
}

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;
