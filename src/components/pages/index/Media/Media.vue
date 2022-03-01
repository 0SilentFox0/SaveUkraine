<template>
  <section class="media">
    <Container>
      <Photos :photos="photos">
        <template #title>
          <slot name="photos-title"></slot>
        </template>
      </Photos>
      <Videos :videos="videos">
        <template #title>
          <slot name="videos-title"></slot>
        </template>
      </Videos>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Container from '@/components/ui/Container.vue';
import Photos from '@/components/pages/index/Media/Photos/Photos.vue';
import Videos from '@/components/pages/index/Media/Videos/Videos.vue';
import { Media } from '@/database/pageInfo.interface';

export default defineComponent({
  components: { Videos, Photos, Container },

  props: {
    videos: {
      type: Array as PropType<Media.IVideo[]>,
      required: true,
    },
    photos: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.media {
  padding-top: 100px;
  padding-bottom: 100px;

  background: #121212;
}
</style>
