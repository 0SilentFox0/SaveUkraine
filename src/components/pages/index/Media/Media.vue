<template>
  <section class="media">
    <Container>
      <Photos />
      <Videos />
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/ui/Container.vue';
import Photos from '@/components/pages/index/Media/Photos/Photos.vue';
import Videos from '@/components/pages/index/Media/Videos/Videos.vue';

export default defineComponent({
  components: { Videos, Photos, Container },
});
</script>

<style lang="scss" scoped>
.media {
  padding-top: 100px;
  padding-bottom: 100px;

  background: #121212;
}
</style>
