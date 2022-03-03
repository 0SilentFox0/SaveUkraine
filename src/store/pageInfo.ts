import { defineStore } from 'pinia';
import { useCommonStore } from '@/store/common';
import { ref, Ref } from 'vue';
import { IPageInfo } from '@/database/pageInfo.interface';
import { pageInfoGateway } from '@/database/pageInfo.gateway';

interface State {
  pageInfo: Ref<IPageInfo>;
  languages: Ref<string[]>;
}

export const usePageInfoStore = defineStore('pageInfo', () => {
  const { isPrefetched } = useCommonStore();

  const state: State = {
    pageInfo: ref({} as IPageInfo),
    languages: ref([] as string[]),
  };

  const actions = {
    async getPageInfo(params: { lang: string }) {
      const isEmpty = !Object.keys(state.pageInfo.value).length;
      if (isEmpty || !isPrefetched) {
        state.pageInfo.value = await pageInfoGateway.getPageInfo(params);
      }
    },

    async getLanguages() {
      const isEmpty = !Object.keys(state.pageInfo.value).length;
      if (isEmpty || !isPrefetched) {
        state.languages.value = await pageInfoGateway.getLanguages();
      }
    },
  };

  return {
    ...state,
    ...actions,
  };
});
