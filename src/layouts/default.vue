<template>
  <!-- <div class="default-layout">
    <TheHeader />
    <div class="layout-content"> -->
      <router-view />
    <!-- </div>
    <TheFooter />
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import TheHeader from '@/components/layout/TheHeader/TheHeader.vue';
// import TheFooter from '@/components/layout/TheFooter/TheFooter.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    // TheFooter,
    // TheHeader,
  },

  setup() {},

  computed: {},

  mounted() {},
});
</script>

<style lang="scss"></style>
