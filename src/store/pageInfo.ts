import { defineStore } from 'pinia';
import { useCommonStore } from '@/store/common';
import { ref, Ref } from 'vue';

interface State {
  pageInfo: Ref<>;
}

export const useNewsStore = defineStore('news', () => {
  const { isPrefetched } = useCommonStore();

  const state: State = {
    news: ref<I>({}),
  };

  const actions = {
    async getNews(params: { lang: string }) {
      if (!state.pageInfo.value.length && !isPrefetched) {
        state.pageInfo.value = await PageInfo.getPageInfo(params);
      }
    },
  };

  return {
    ...state,
    ...actions,
  };
});
