<template>
  <div class="videos">
    <div class="title"><slot name="title"></slot></div>
    <div class="grid">
      <VideoCard v-for="video in videos" :key="video.url" :video="video" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VideoCard from '@/components/pages/index/Media/Videos/VideoCard.vue';
import { IMedia } from '@/components/pages/index/Media/Media.types';

export default defineComponent({
  components: { VideoCard },

  props: {
    videos: {
      type: Array as PropType<IMedia.Video[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 40px;

  color: #eff0f1;
  font-weight: bold;
  font-size: 60px;
  font-family: Bebas Neue;
  font-style: normal;
  line-height: 76px;
  text-transform: uppercase;

  @include media(tablet) {
    font-size: 44px;
    line-height: 50px;
  }
}

.grid {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  @include media(laptop) {
    grid-template-columns: 1fr 1fr;
  }
  @include media(tablet) {
    grid-template-columns: 1fr;
  }
}
</style>
