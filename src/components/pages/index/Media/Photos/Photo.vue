<template>
  <div class="photo">
    <ImageWebpWrapper :image-default="photo.png" :image-webp="photo.webp" :width="photo.width" :height="photo.height"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import ImageWebpWrapper from "@/components/ui/ImageWebpWrapper.vue";
import {IMedia} from "@/components/pages/index/Media/Media.types";

export default defineComponent({
  components: {ImageWebpWrapper},
  props: {
    photo: {
      type: Object as PropType<IMedia.Photo>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.photo {
  cursor: pointer;

  :deep(img) {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}
</style>
