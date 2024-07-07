import { ErrorMessageMode } from '#/axios';
import { defHttp } from '@/utils/http/axios';

enum Api {
  Account = '/admin/account',
  AccountQuery = '/admin/account/query',
}

export function addAccount(params: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post<any>(
    {
      url: Api.Account,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function updateAccount(params: any, mode: ErrorMessageMode = 'message') {
  return defHttp.put<any>(
    {
      url: Api.Account,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function deleteAccount(params: any, mode: ErrorMessageMode = 'message') {
  return defHttp.delete<any>(
    {
      url: Api.Account + '/' + params.id,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function queryAccount(params?: any, mode: ErrorMessageMode = 'message') {
  return defHttp.post<any>(
    {
      url: Api.AccountQuery,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
