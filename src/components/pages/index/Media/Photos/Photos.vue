<template>
  <div class="photos">
    <div class="title">Photos</div>
    <div class="photos-grid">
      <Photo
        v-for="image in images"
        :key="image"
        :photo="image"
        @click="openImage(image.png)" />
    </div>
    <VPopup :is-opened="!!openedImageUrl" width="1202px" @close="closeImage">
      <div class="popup-image">
        <img :src="openedImageUrl" alt="" />
      </div>
    </VPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { images } from '@/components/pages/index/content';
import Photo from '@/components/pages/index/Media/Photos/Photo.vue';
import VPopup from '@/components/ui/VPopup.vue';

export default defineComponent({
  components: { VPopup, Photo },

  data: () => ({
    images,
    openedImageUrl: '',
  }),

  methods: {
    openImage(url: string) {
      this.openedImageUrl = url;
    },

    closeImage() {
      this.openedImageUrl = '';
    },
  },
});
</script>

<style lang="scss" scoped>
.photos {
  margin-bottom: 100px;
}

.title {
  margin-bottom: 40px;

  color: #eff0f1;
  font-weight: bold;
  font-size: 60px;
  font-family: Bebas Neue;
  font-style: normal;
  line-height: 76px;
  text-transform: uppercase;
}

.photos-grid {
  display: grid;
  grid-auto-rows: 10px;
  grid-column-gap: 40px;
  grid-template-columns: repeat(3, 374px);
  width: 1200px;

  @include media(laptop) {
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 100%;
  }

  @include media(tablet) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 530px;
  }

  @include media(mobile) {
    width: 100%;
  }

  & > * {
    &:nth-child(1) {
      grid-row: 1 / 80;
      grid-column: 1 / 4;
    }

    &:nth-child(2) {
      grid-row: 84 / 108;
      grid-column: 1 / 2;
    }

    &:nth-child(3) {
      grid-row: 84 / 136;
      grid-column: 2 / 4;
    }

    &:nth-child(4) {
      grid-row: 112 / 136;
      grid-column: 1 / 2;
    }

    &:nth-child(5) {
      grid-row: 140 / 192;
      grid-column: 1 / 3;
    }

    &:nth-child(6) {
      grid-row: 140 / 164;
    }

    &:nth-child(7) {
      grid-row: 168 / 192;
    }

    &:nth-child(8) {
      grid-row: 196 / 220;
    }

    &:nth-child(9) {
      grid-row: 196 / 220;
      grid-column: 2 / 3;
    }

    &:nth-child(10) {
      grid-row: 196 / 220;
    }
  }
}

img {
  width: 100%;
}
</style>
