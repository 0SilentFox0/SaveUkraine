<template>
  <main class="main">
    <Welcome />
    <WhatToDo />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/Welcome.vue';
import WhatToDo from '@/components/pages/WhatToDo.vue';
// import HeadWrapper from '@/components/ui/HeadWrapper.vue';

export default defineComponent({
  components: { Welcome, WhatToDo },

  data() {},
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
