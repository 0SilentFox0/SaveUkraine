<template>
  <section class="welcome">
    <Container>
      <div class="content">
        <div class="text-content">
          <h2 class="title">#StandWithUkraine</h2>
          <h2 class="title accent-text">#StopWarInUkraine</h2>
          <!-- eslint-disable vue/no-v-html -->
          <div class="text" v-html="text"></div>
          <!--eslint-enable-->
          <div class="buttons">
            <VButton
              class="btn"
              tag="a"
              href="https://uahelp.monobank.ua/"
              target="_blank"
              rel="noopener nofollow">
              <slot name="buttonText" />
            </VButton>
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
    <Statistics class="welcome-stats" :stats="stats" />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ukraineWebp from '@/assets/img/pages/index/ua.webp';
import ukrainePng from '@/assets/img/pages/index/ua.png';
import VButton from '@/components/ui/VButton/VButton.vue';
import ImageWebpWrapper from '@/components/ui/ImageWebpWrapper.vue';
import Container from '@/components/ui/Container.vue';
import Statistics from '@/components/sections/Statistics.vue';
import { IStat } from '@/components/sections/content';

export default defineComponent({
  components: {
    VButton,
    ImageWebpWrapper,
    Container,
    Statistics,
  },

  props: {
    text: {
      type: String,
      default: '',
    },
    stats: {
      type: Array as PropType<IStat[]>,
      required: true,
    },
  },

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

  width: 100%;
  height: 956px;

  background-image: url('@/assets/img/pages/index/home-background.png');
  background-repeat: no-repeat;
  background-position: center;
}

.image-wrapper {
  @include media(tablet) {
    display: none;
  }
}

.welcome-stats {
  position: absolute;
  bottom: -80px;
  left: 50%;

  transform: translateX(-50%);

  @include media(tablet) {
    bottom: -360px;
  }
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: calc(150px + $header-height);

  @include media(tablet) {
    padding-top: calc(50px + $header-height);
  }
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  margin-right: 90px;

  @include media(tablet) {
    margin-right: 0;
  }
}

.text {
  width: 100%;
  margin-top: 20px;

  color: $color-black;
  font-weight: 400;

  font-size: 15px;
  line-height: 24px;
}

.accent-text {
  color: $color-brand;
}

.title {
  width: 100%;

  font-weight: bold;
  font-size: 72px;
  font-family: $secondary-font;
  line-height: 72px;
  @include media(tablet) {
    font-size: 56px;
  }

  @include media(mobile) {
    font-size: 42px;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
}

.btn {
  text-transform: uppercase;

  @include media(mobile) {
    width: 100%;
  }
}
</style>
