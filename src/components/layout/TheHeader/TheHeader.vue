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
          <div class="languages">
            <!-- <span class="item"> EN </span> -->
            <!-- <span class="item divider"> EN </span> -->
            <!-- <span class="item"> EN </span> -->
          </div>
          <VButton
            tag="a"
            href="https://savelife.in.ua/en/donate/"
            target="_blank"
            rel="noopener nofollow"
            class="button"
            >SUPPORT UKRAINE</VButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VButton from '@/components/ui/VButton/VButton.vue';
import logo from '@/assets/img/global/logo.svg?url';

export default defineComponent({
  components: {
    VButton,
  },
  data() {
    return {
      img: {
        logo,
      },
    };
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
}

.item {
  margin: 0 10px;

  color: $color-black;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  &.divider {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 0;

      width: 1px;
      height: 15px;

      color: $color-divider;

      content: '|';
    }

    &::before {
      left: -13px;
    }

    &::after {
      right: -8px;
    }
  }
}

.button {
  margin-left: 10px;
}
</style>
