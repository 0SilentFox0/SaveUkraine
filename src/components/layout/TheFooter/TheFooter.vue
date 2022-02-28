<template>
  <footer class="footer">
    <Container>
      <div class="content">
        <a
          href="https://www.facebook.com/stooopwarinukraine"
          target="_blank"
          class="text black underline"
          >{{ currentLoacaleText.follow }}</a
        >
        <div class="text black">
          {{ currentLoacaleText.contact }}
          <a
            href="mailto:help@stopwarukraine.com"
            target="_blank"
            class="underline"
            >help@stopwarukraine.com</a
          >
        </div>
        <a
          href="https://uahelp.monobank.ua/"
          target="_blank"
          class="text black underline"
          >{{ currentLoacaleText.contact }}</a
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
  computed: {
    currentLoacaleText() {
      let text = {
        follow: '',
        contact: '',
        contribute: '',
      };

      switch (this.$route.path) {
        case '/':
          text.follow = 'Follow us on Facebook';
          text.contact = 'Contact us at';
          text.contribute = 'Contribute to Ukrainian army';
          break;
        case '/ru':
          text.follow = 'ПОДПИШИСЬ В Facebook';
          text.contact = 'СВЯЗЬ С НАМИ';
          text.contribute = 'ПОДДЕРЖАТЬ УКРАИНСКУЮ АРМИЮ';
          break;
        case '/ua':
          text.follow = 'ПIДПИШИСЬ У Facebook';
          text.contact = 'ЗʼЯЗОК З НАМИ';
          text.contribute = 'ПIДТРИМАТИ УКРАЇНСЬКУ АРМIЮ';
          break;
      }

      return text;
    },
  },
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

  cursor: pointer;

  transition: $transition-default;

  @include media(tablet) {
    font-size: 52px;
  }

  @include media(mobile) {
    font-size: 24px;
    line-height: 36px;
  }

  &.black {
    background: rgba(36, 36, 36, 0.8);
    &:hover {
      background: rgba(226, 51, 40, 0.8);
    }
  }
}
</style>
