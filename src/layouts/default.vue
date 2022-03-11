<template>
  <div class="default-layout">
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { initGTag } from '@/utils/google-gtag';
import { initGoogleTagManager } from '@/utils/google-tag-manager';

export default defineComponent({
  name: 'DefaultLayout',
  mounted() {
    window.addEventListener('load', () => {
      initGTag();
      initGoogleTagManager();
    });
  },
});
</script>

<style lang="scss"></style>
