<template>
  <section class="welcome">
    <Container>
      <div class="content">
        <div class="text-content">
          <h2 class="title">#StandWithUkraine</h2>
          <h2 class="title accent-text">#StopWarInUkraine</h2>
          <div class="text" v-html="$t('index.welcome_description_top')"></div>
          <div
            class="text"
            v-html="$t('index.welcome_description_bottom')"></div>
          <div class="buttons">
            <VButton
              href="https://savelife.in.ua/en/donate/"
              rel="noopener nofollow"
              tag="a"
              target="_blank"
              >{{ $t('index.welcome_button') }}
            </VButton>
            <!-- <VButton
            tag="a"
            href="https://savelife.in.ua/en/donate/"
            target="_blank"
            rel="noopener nofollow"
            class="button"
            type="white"
            >SHARE</VButton
          > -->
          </div>
        </div>
        <div class="image-wrapper">
          <ImageWebpWrapper
            :image-default="img.png"
            :image-webp="img.webp"
            alt="Ukraine"
            class="image"
            height="376"
            width="549" />
        </div>
      </div>
    </Container>
    <Statistics class="welcome-stats" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HeadWrapper from '@/components/ui/HeadWrapper.vue';
import ukraineWebp from '@/assets/img/pages/index/ua.webp';
import ukrainePng from '@/assets/img/pages/index/ua.png';
import VButton from '@/components/ui/VButton/VButton.vue';
import ImageWebpWrapper from '@/components/ui/ImageWebpWrapper.vue';
import Container from '@/components/ui/Container.vue';
import Statistics from '@/components/sections/Statistics.vue';

export default defineComponent({
  components: { VButton, ImageWebpWrapper, Container, Statistics },

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
  position: relative;

  height: 956px;

  background-image: url('@/assets/img/pages/index/home-background.png');
  background-repeat: no-repeat;
  background-position: center;
}

.welcome-stats {
  position: absolute;
  bottom: -80px;
  left: 50%;

  transform: translateX(-50%);
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: calc(150px + $header-height);
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 90px;
}

.text {
  margin-top: 20px;

  color: $color-black;
  font-weight: 400;

  font-size: 15px;
  line-height: 24px;
}

:deep(.accent-text) {
  color: $color-brand;
}

.title {
  font-weight: bold;
  font-size: 72px;
  font-family: $secondary-font;
  line-height: 72px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
}

.button {
  margin-left: 15px;

  text-transform: uppercase;
}
</style>
