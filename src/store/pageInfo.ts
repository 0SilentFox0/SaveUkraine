import { defineStore } from 'pinia';
import { useCommonStore } from '@/store/common';
import { ref, Ref } from 'vue';
import { IPageInfo } from '@/database/pageInfo.interface';
import { pageInfoGateway } from '@/database/pageInfo.gateway';

interface State {
  pageInfo: Ref<IPageInfo[]>;
}

export const usePageInfoStore = defineStore('pageInfo', () => {
  const { isPrefetched } = useCommonStore();

  const state: State = {
    pageInfo: ref<IPageInfo[]>([]),
  };

  const actions = {
    async getPageInfo() {
      if (!state.pageInfo.value.length && !isPrefetched) {
        state.pageInfo.value = await pageInfoGateway.getPageInfo();
      }
    },
  };

  return {
    ...state,
    ...actions,
  };
});
