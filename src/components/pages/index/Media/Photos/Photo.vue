<template>
  <div class="photo">
    <ImageWebpWrapper :image-default="urlPng" :image-webp="urlWebp" :width="width" :height="height"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ImageWebpWrapper from "@/components/ui/ImageWebpWrapper.vue";

export default defineComponent({
  components: {ImageWebpWrapper},
  props: {
    urlPng: {
      type: String,
      default: ''
    },
    urlWebp: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
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
