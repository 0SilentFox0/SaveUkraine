<template>
  <main class="main">
    <Welcome />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '../components/pages/Welcome.vue';
// import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: { Welcome },

  data() {},
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
