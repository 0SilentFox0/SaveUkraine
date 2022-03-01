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
      const path = this.$route.path;
      if (path === '/ru') return 'ПОМОЧЬ УКРАИНЕ';
      else if (path === '/ua') return 'Support Ukraine';
      return 'Support Ukraine';
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
  max-width: 1230px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
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
}

.button {
  margin-left: 20px;

  text-transform: uppercase;

  @include media(mobile) {
    margin-left: 10px;
  }
}

.image-wrapper {
  @include media(mobile) {
    width: 94px;
  }
}

.image {
  width: 100%;
  height: 100%;
}
</style>
