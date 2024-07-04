import { DeptListItem } from '@/api/model/system/systemModel';
import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

enum Api {
  Dept = '/admin/dept',
  DeptTree = '/admin/dept/query',
}

export const addDept = (params?: DeptListItem) => defHttp.post({ url: Api.Dept, params });
export const updateDept = (params?: DeptListItem) => defHttp.put({ url: Api.Dept, params });

export function queryDept(params?: DeptListItem, mode: ErrorMessageMode = 'message') {
  return defHttp.post<any>(
    {
      url: Api.DeptTree,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
