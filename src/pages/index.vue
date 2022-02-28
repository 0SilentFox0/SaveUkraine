<template>
  <main class="main">
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
import Media from '@/components/pages/index/Media/Media.vue';
import News from '@/components/pages/index/News/News.vue';

// import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: { News, Welcome, WhatToDo, Media },

  data() {},
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
