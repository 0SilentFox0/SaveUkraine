<template>
  <div class="video-card">
    <a :href="video.url" target="_blank" rel="noopener nofollow">
      <div class="thumb">
        <div class="image">
          <ImageWebpWrapper
            :image-default="video.thumb.png"
            :image-webp="video.thumb.webp"
            height="236"
            width="374" />
        </div>
        <div class="hover-mask">
          <div class="play-icon">
            <img :src="playIcon" width="80" height="80" />
          </div>
        </div>
      </div>
      <div class="title">{{ video.title }}</div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ImageWebpWrapper from '@/components/ui/ImageWebpWrapper.vue';
import { IMedia } from '@/components/pages/index/Media/Media.types';
import playIcon from '@/assets/img/icons/play.svg?url';

export default defineComponent({
  components: { ImageWebpWrapper },

  props: {
    video: {
      type: Object as PropType<IMedia.Video>,
      required: true,
    },
  },

  data: () => ({
    playIcon,
  }),
});
</script>

<style lang="scss" scoped>
.thumb {
  position: relative;

  width: 374px;
  height: 236px;
  margin-bottom: 20px;

  @include media(tablet) {
    width: 500px;
  }

  @include media(mobile) {
    width: 100%;
    max-width: 350px;
  }

  .hover-mask {
    position: absolute;
    top: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    background: rgba(45, 43, 43, 0.36);
    visibility: hidden;
    opacity: 0;

    transition: all 0.4s;

    .play-icon {
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .video-card:hover & {
      visibility: visible;
      opacity: 1;
    }
  }

  .image {
    position: relative;

    width: 100%;
    height: 100%;
  }

  :deep(img) {
    width: 100%;
    height: 100%;
  }
}

.title {
  width: 100%;

  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  transition: all 0.3s ease-out;

  .video-card:hover & {
    color: #e23328;
    text-decoration-line: underline;
  }
}
</style>
