<template>
  <div class="videos">
    <div class="title">Videos</div>
    <div class="grid">
      <VideoCard v-for="video in videos" :key="video.url" :video="video" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { videos } from '@/components/pages/index/content';
import VideoCard from '@/components/pages/index/Media/Videos/VideoCard.vue';

export default defineComponent({
  components: { VideoCard },
  data: () => ({
    videos,
  }),
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
}

.grid {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
