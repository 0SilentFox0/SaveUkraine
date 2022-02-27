<template>
  <main class="main">
    <Media/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Media from "@/components/pages/index/Media/Media.vue";
// import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: {
    Media
  },

  data: () => ({
  }),
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}

.paragraph-2 {
  background: #fafafd;
}
</style>
