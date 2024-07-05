import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const permission: AppRouteModule = {
  path: '/form-designer',
  name: 'Form-designer',
  component: LAYOUT,
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: t('lang.menu.form_design.form_design'),
  },
  children: [
    {
      path: 'design',
      name: 'Design',
      meta: {
        title: t('lang.menu.form_design.form_design'),
      },
      component: () => import('@/views/form-design/index.vue'),
    },
    {
      path: 'example',
      name: 'Example',
      meta: {
        title: t('lang.menu.form_design.example'),
      },
      component: () => import('@/views/form-design/examples/baseForm.vue'),
    },
  ],
};

export default permission;
