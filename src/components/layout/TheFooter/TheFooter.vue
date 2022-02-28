<template>
  <footer class="footer">
    <Container>
      <div class="content">
        <a
          href="https://www.facebook.com/Stopwarinukraine/"
          target="_blank"
          class="text black underline"
          >Follow us on Facebook</a
        >
        <div class="text black">
          Contact us at
          <a
            href="mailto:help@stopwarukraine.com"
            target="_blank"
            class="underline"
            >help@stopwarukraine.com</a
          >
        </div>
        <a
          href="https://savelife.in.ua/en/donate/"
          target="_blank"
          class="text accent underline"
          >Contribute to Ukrainian army</a
        >
      </div>
    </Container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/ui/Container.vue';

export default defineComponent({
  components: { Container },
});
</script>

<style lang="scss" scoped>
.footer {
  height: 570px;

  background-image: url('@/assets/img/pages/index/footer-bg.png');
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

  @include media(tablet) {
    max-width: 530px;
  }
}

.text {
  margin-bottom: 10px;
  padding: 10px;

  color: $color-white;
  font-weight: bold;
  font-size: 72px;
  font-family: $secondary-font;
  line-height: 72px;

  @include media(tablet) {
    font-size: 52px;
  }

  @include media(mobile) {
    font-size: 32px;
  }
  &.black {
    background: rgba(36, 36, 36, 0.8);
  }

  &.accent {
    background: rgba(226, 51, 40, 0.8);
  }
}

.underline {
  position: relative;

  &::before {
    position: absolute;
    bottom: 10px;
    left: 50%;

    width: 97%;
    height: 2px;

    background-color: $color-white;
    transform: translateX(-50%);

    content: '';
  }
}
</style>
