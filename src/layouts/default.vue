<template>
  <div class="default-layout">
    <TheHeader />
    <div class="layout-content">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter/TheFooter.vue';

import { initGTag } from '@/utils/google-gtag';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    window.addEventListener('load', () => {
      initGTag();
    });
  },
});
</script>

<style lang="scss"></style>
