<template>
  <div class="photo">
    <div class="img">
      <img
        v-lazy="{
          src: `https://stopwarukraine.directus.app/assets/${photo.directus_files_id}`,
        }"
        alt="Photo" />
    </div>
    <div class="hover-mask"></div>
  </div>
</template>

<script lang="ts">
import { Media } from '@/database/pageInfo.interface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    photo: {
      type: Object as PropType<Media.IPhoto>,
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

    @include media(tablet) {
      max-width: 530px;
      margin-bottom: 30px;
    }

    @include media(mobile) {
      max-width: 350px;
    }
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
