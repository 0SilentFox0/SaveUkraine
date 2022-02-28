<template>
  <div class="header">
    <div class="header-container">
      <div class="header-content">
        <div class="left-side">
          <div class="image-wrapper">
            <img v-lazy="{ src: img.logo }" alt="logo" class="image" />
          </div>
        </div>

        <div class="right-side">
          <Languages />
          <VButton
            class="button"
            href="https://savelife.in.ua/en/donate/"
            rel="noopener nofollow"
            tag="a"
            target="_blank"
            >{{ buttonText }}
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VButton from '@/components/ui/VButton/VButton.vue';
import logo from '@/assets/img/global/logo.svg?url';
import Languages from '@/components/layout/TheHeader/Languages.vue';

export default defineComponent({
  components: {
    Languages,
    VButton,
  },

  data() {
    return {
      img: {
        logo,
      },
    };
  },

  computed: {
    buttonText() {
      let text = '';
      switch (this.$route.path) {
        case '/':
          text = 'Support Ukraine';
          break;
        case '/ru':
          text = 'ПОМОЧЬ УКРАИНЕ';
          break;
        case '/ua':
          text = 'Підтримати Україну';
          break;
      }

      return text;
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;

  z-index: $z-v-header;

  width: 100%;

  height: $header-height;

  background-color: $color-header;

  border-bottom: 1px solid $color-divider;
}

.header-container {
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  height: 100%;
}

.right-side {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @include media(mobile) {
    flex-direction: row-reverse;
    gap: 10px;
  }
}

.button {
  margin-left: 10px;

  text-transform: uppercase;
}
</style>
