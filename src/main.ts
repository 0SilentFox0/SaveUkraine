import App from './App.vue';

import { createSSRApp } from 'vue';
import { createRouter } from './router';
import { createHead } from '@vueuse/head';

import VueLazyLoad from 'vue3-lazyload';
import i18n from '@/plugins/i18n';

import SvgIcon from '@/components/ui/SvgIcon.vue';
import 'virtual:svg-icons-register';

import '@/assets/scss/index.scss';

export function createApp() {
  const app = createSSRApp(App);

  const router = createRouter();
  const head = createHead();

  app.use(router);
  app.use(head);

  app.use(VueLazyLoad);
  app.use(i18n);

  app.component('SvgIcon', SvgIcon);

  return { app, router, head };
}
