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

export default defineComponent({
  name: 'DefaultLayout',
  mounted() {
    window.addEventListener('load', () => {
      initGTag();
    });
  },
});
</script>

<style lang="scss"></style>
