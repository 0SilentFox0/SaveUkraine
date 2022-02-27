<template>
  <div class="default-layout">
    <TheHeader />
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },

  setup() {},

  computed: {},

  mounted() {},
});
</script>

<style lang="scss"></style>
