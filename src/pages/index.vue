<template>
  <main class="main">
    <HeadWrapper
      title="Stop war in Ukraine"
      description="Since February 24th, Ukraine is being attacked by Russian armed forces. Thanks to the unity of Ukrainians, we are standing strong but need help to get through this."
      :route="$route.path" />
    <Welcome />
    <WhatToDo />
    <News />
    <Media />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/index/Welcome.vue';
import WhatToDo from '@/components/pages/index/WhatToDo.vue';
import News from '@/components/pages/index/News/News.vue';
import Media from '@/components/pages/index/Media/Media.vue';
import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: { News, Welcome, WhatToDo, Media, HeadWrapper },

  data() {},
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
