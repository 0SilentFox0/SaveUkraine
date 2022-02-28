<template>
  <div class="photo">
    <div class="img">
      <ImageWebpWrapper
        :image-default="photo.png"
        :image-webp="photo.webp"
        :width="photo.width"
        :height="photo.height" />
    </div>
    <div class="hover-mask"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ImageWebpWrapper from '@/components/ui/ImageWebpWrapper.vue';
import { IMedia } from '@/components/pages/index/Media/Media.types';

export default defineComponent({
  components: { ImageWebpWrapper },
  props: {
    photo: {
      type: Object as PropType<IMedia.Photo>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.photo {
  position: relative;

  cursor: pointer;

  .img {
    position: relative;

    width: 100%;
    height: 100%;
  }

  :deep(img) {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  &:hover {
    .hover-mask {
      visibility: visible;
      opacity: 1;
    }
  }

  .hover-mask {
    position: absolute;
    top: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    background: rgba(45, 43, 43, 0.36);
    visibility: hidden;
    opacity: 0;

    transition: all 0.4s;
  }
}
</style>
