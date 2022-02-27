<template>
  <main class="main">
    <Welcome />
    <Media/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/Welcome.vue';
import Media from "@/components/pages/index/Media/Media.vue";

// import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: { Welcome, Media },

  data() {},
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
