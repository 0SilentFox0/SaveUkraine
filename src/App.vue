<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition mode="out-in">
        <suspense>
          <component :is="Component" :key="route" />
          <template #fallback>
            <div>Loading...</div>
          </template>
        </suspense>
      </transition>
    </template>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCommonStore } from './store/common';

export default defineComponent({
  setup() {
    const commonStore = useCommonStore();

    return {
      commonStore,
    };
  },

  mounted() {
    this.commonStore.setIsPrefetched(false);
  },
});
</script>

<style lang="scss" scoped></style>
