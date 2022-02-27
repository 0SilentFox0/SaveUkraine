<template>
  <main class="main">
    <Welcome />
    <WhatToDo />
    <Media />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/Welcome.vue';
import WhatToDo from '@/components/pages/WhatToDo.vue';
import Media from '@/components/pages/index/Media/Media.vue';

// import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: { Welcome, WhatToDo, Media },

  data() {},
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
