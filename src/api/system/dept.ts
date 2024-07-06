import { DeptListItem } from '@/api/model/system/systemModel';
import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

enum Api {
  Dept = '/admin/dept',
  DeptTree = '/admin/dept/query',
}

export function addDept(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post(
    {
      url: Api.Dept,
      params,
    },
    { errorMessageMode: mode },
  );
}

export function updateDept(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.put(
    {
      url: Api.Dept,
      params,
    },
    { errorMessageMode: mode },
  );
}

export function deleteDept(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.delete(
    {
      url: Api.Dept + '/' + params.id,
    },
    { errorMessageMode: mode },
  );
}

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
