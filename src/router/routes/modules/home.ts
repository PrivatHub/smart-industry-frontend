import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('lang.menu.home.home'),
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/sys/home/index.vue'),
      meta: {
        title: t('lang.menu.home.index'),
      },
    },
  ],
};

export default home;
