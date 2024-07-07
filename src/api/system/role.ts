import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

enum Api {
  Role = '/admin/role',
  RoleQuery = '/admin/role/query',
}

export function addRole(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post(
    {
      url: Api.Role,
      params,
    },
    { errorMessageMode: mode },
  );
}

export function updateRole(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.put(
    {
      url: Api.Role,
      params,
    },
    { errorMessageMode: mode },
  );
}

export function deleteRole(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.delete(
    {
      url: Api.Role + '/' + params.id,
    },
    { errorMessageMode: mode },
  );
}

export function queryRole(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post(
    {
      url: Api.RoleQuery,
      params,
    },
    { errorMessageMode: mode },
  );
}

export function pageQueryRole(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post<any>(
    {
      url: Api.RoleQuery,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
