import { ErrorMessageMode } from '#/axios';
import { defHttp } from '@/utils/http/axios';

enum Api {
  Menu = '/admin/menu',
  MenuTree = '/admin/menu/query',
}

export function addMenu(params: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post(
    {
      url: Api.Menu,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function updateMenu(params: any, mode: ErrorMessageMode = 'message') {
  return defHttp.put(
    {
      url: Api.Menu,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function queryMenuTree(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post<any>(
    {
      url: Api.MenuTree,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
