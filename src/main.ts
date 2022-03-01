import App from './App.vue';

import { createSSRApp } from 'vue';
import { createRouter } from './router';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';

import VueLazyLoad from 'vue3-lazyload';

import SvgIcon from '@/components/ui/SvgIcon.vue';
import 'virtual:svg-icons-register';

import '@/assets/scss/index.scss';

export function createApp(state?: any) {
  const app = createSSRApp(App);

  const router = createRouter();
  const head = createHead();

  app.use(router);
  app.use(head);

  const store = createPinia();
  if (state) store.state.value = state;

  app.use(VueLazyLoad);
  app.use(store);

  app.component('SvgIcon', SvgIcon);

  return { app, router, head };
}
