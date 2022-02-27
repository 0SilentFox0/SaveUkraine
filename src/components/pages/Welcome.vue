<template>
  <section class="welcome">
    <Container>
      <div class="content">
        <div class="text-content">
          <h2 class="title">#StandWithUkraine</h2>
          <h2 class="title accent-text">#StopWarInUkraine</h2>
          <div class="text">
            On February, 24th its whole territory
            <span class="accent-text">
              was attacked by Russian armed forces
            </span>
            - from the territories of Russia and Belarus, from the sea, and the
            sky. They are deploying paratroopers, carrying our air strikes and
            shoot at us from across the border.
          </div>
          <div class="text">
            Thanks to the Army and the unity of Ukrainians, we are standing
            strong but
            <span class="accent-text"> need all the help we can get. </span>
          </div>
          <div class="buttons">
            <VButton class="button">DONATE TO HELP UKRAINE</VButton>
            <VButton class="button" type="white">SHARE</VButton>
          </div>
        </div>
        <div class="image-wrapper">
          <ImageWebpWrapper
            :image-webp="img.webp"
            :image-default="img.png"
            class="image"
            width="549"
            height="376"
            alt="Ukraine" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HeadWrapper from '@/components/ui/HeadWrapper.vue';
import ukraineWebp from '@/assets/img/pages/index/ua.webp';
import ukrainePng from '@/assets/img/pages/index/ua.png';
import VButton from '@/components/ui/VButton/VButton.vue';
import ImageWebpWrapper from '@/components/ui/ImageWebpWrapper.vue';
import Container from '../ui/Container.vue';

export default defineComponent({
  components: { VButton, ImageWebpWrapper, Container },

  data() {
    return {
      img: {
        webp: ukraineWebp,
        png: ukrainePng,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  height: 956px;
  background-image: url('@/assets/img/pages/index/home-background.png');
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  padding-top: calc(150px + $header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  color: $color-black;
}

.accent-text {
  color: $color-brand;
}
</style>
