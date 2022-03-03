import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

interface State {
  isPrefetched: Ref<boolean>;
}

export const useCommonStore = defineStore('common', () => {
  const state: State = {
    isPrefetched: ref(false),
  };

  const actions = {
    setIsPrefetched(isPrefetched: boolean) {
      state.isPrefetched.value = isPrefetched;
    },
  };

  return {
    ...state,
    ...actions,
  };
});
