<template>
  <div
    class="languages-mobile"
    :class="{ active: dropdownOpened }"
    @click="toggleDropdown">
    <span class="language">
      {{ activeItemSlug }}
    </span>
    <SvgIcon name="globe" width="16" height="16" fill="currentColor" />
  </div>
  <div class="languages" :class="{ 'mobile-opened': dropdownOpened }">
    <span
      v-for="locale in items"
      :key="locale.slug"
      :class="{ active: locale.slug === activeItemSlug }"
      class="language"
      @click="setLocale(locale.slug)"
      >{{ dropdownOpened ? locale.name : locale.slug }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import i18n from '@/plugins/i18n';
import SvgIcon from '@/components/ui/SvgIcon.vue';

export default defineComponent({
  components: { SvgIcon },
  data: () => ({
    items: [
      {
        name: 'English',
        slug: 'en',
      },
      {
        name: 'Ukrainian',
        slug: 'ua',
      },
      {
        name: 'Russian',
        slug: 'ru',
      },
    ],
    activeItemSlug: i18n.global.locale.value,
    dropdownOpened: false,
  }),

  methods: {
    setLocale(locale: string) {
      i18n.global.locale.value = locale;
      this.$router.push(locale);
    },

    toggleDropdown() {
      this.dropdownOpened = !this.dropdownOpened;
    },
  },
});
</script>

<style lang="scss" scoped>
.language {
  margin: 0 10px;

  color: $color-black;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;

  cursor: pointer;

  &.active {
    color: #e23328;
  }

  &:nth-child(2) {
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    padding: 1px 10px;

    @include media(mobile) {
      padding: 0;
      border: none;
    }
  }
}

.languages-mobile {
  display: none;

  @include media(mobile) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #121212;
    transition: color 0.3s ease-out;

    .language {
      font-weight: 700;
      color: inherit;
    }

    &.active {
      color: #e23328;

      .dropdown {
        display: block;
      }
    }
  }
}

.languages {
  @include media(mobile) {
    display: none;

    &.mobile-opened {
      padding: 5px;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 72px;
      left: 0;
      width: 100vw;
      background: #ffffff;
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

      .language {
        text-transform: none;
        padding: 15px 0;
        border-bottom: 1px solid #eff0f1;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>
