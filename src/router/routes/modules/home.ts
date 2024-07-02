import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  redirect: '/home/index',
  component: LAYOUT,
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.home.home'),
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/sys/home/index.vue'),
      meta: {
        title: t('routes.home.index'),
      },
    },
  ],
};

export default home;
