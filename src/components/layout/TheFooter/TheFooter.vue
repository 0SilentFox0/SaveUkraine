<template>
  <footer class="footer">
    <Container>
      <div class="content">
        <div class="socials">
          <a
            href="https://www.facebook.com/stooopwarinukraine"
            target="_blank"
            class="text black">
            <SvgIcon name="facebook" width="54" height="54" class="icon" />
            <span> Facebook </span>
          </a>
          <a
            href="https://www.instagram.com/stopwarinukrainemedia"
            target="_blank"
            class="text black">
            <SvgIcon name="instagram" width="54" height="54" class="icon" />
            <span> Instagram </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCP31d6_bWK2C991APvSa4VA/videos"
            target="_blank"
            class="text black">
            <SvgIcon name="youtube" width="54" height="54" class="icon" />
            <span> YOUTUBE </span>
          </a>
          <a
            href="https://www.linkedin.com/company/stop-war-in-ukraine"
            target="_blank"
            class="text black">
            <SvgIcon name="linkedin" width="54" height="54" class="icon" />
            <span> LinkedIn </span>
          </a>
        </div>
        <a
          href="mailto:help@stopwarukraine.com"
          target="_blank"
          class="text black">
          {{ currentLoacaleText.contact }}
          help@stopwarukraine.com</a
        >
        <a
          href="https://uahelp.monobank.ua/"
          target="_blank"
          class="text black"
          >{{ currentLoacaleText.contribute }}</a
        >
      </div>
    </Container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/ui/Container.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

export default defineComponent({
  components: { Container, SvgIcon },
  computed: {
    currentLoacaleText() {
      const path = this.$route.path;
      if (path === '/ru')
        return {
          contact: 'СВЯЗЬ С НАМИ',
          contribute: 'ПОДДЕРЖАТЬ УКРАИНСКУЮ АРМИЮ',
        };
      else if (path === '/ua')
        return {
          contact: 'ЗʼЯЗОК З НАМИ',
          contribute: 'ПIДТРИМАТИ УКРАЇНСЬКУ АРМIЮ',
        };
      return {
        contact: 'Contact us at',
        contribute: 'Contribute to Ukrainian army',
      };
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

  @include media(tablet) {
    height: 470px;
  }
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

.socials {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @include media(mobile) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-right: 10px;

    @include media(laptop) {
      font-size: 52px;

      svg {
        width: 38px;
        height: 38px;
      }
    }

    @include media(tablet) {
      font-size: 24px;
      svg {
        width: 20px;
        height: 20px;
      }
    }

    @include media(mobile) {
      width: 100%;
    }
  }
}

.icon {
  margin-right: 10px;
}

.text {
  margin-bottom: 10px;
  padding: 10px;

  color: $color-white;
  font-weight: bold;
  font-size: 72px;
  line-height: 68px;
  font-family: $secondary-font;

  cursor: pointer;

  transition: $transition-default;

  @include media(tablet) {
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }

  &.black {
    background: rgba(36, 36, 36, 0.8);
    &:hover {
      background: rgba(226, 51, 40, 0.8);
    }
  }
}
</style>
