<template>
  <div
    class="languages-mobile"
    :class="{ active: dropdownOpened }"
    @click="toggleDropdown">
    <span class="language">
      {{ activeItemSlug?.slug }}
    </span>
    <SvgIcon name="globe" width="16" height="16" fill="currentColor" />
  </div>
  <div class="languages" :class="{ 'mobile-opened': dropdownOpened }">
    <router-link
      v-for="locale in items"
      :key="locale.slug"
      :to="locale.path"
      :class="{ active: locale.path === $route.path }"
      class="language"
      >{{ dropdownOpened ? locale.name : locale.slug }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

export default defineComponent({
  components: { SvgIcon },
  data: () => ({
    items: [
      {
        name: 'English',
        slug: 'en',
        path: '/',
      },
      {
        name: 'Ukrainian',
        slug: 'ua',
        path: '/ua',
      },
      {
        name: 'Russian',
        slug: 'ru',
        path: '/ru',
      },
    ],
    dropdownOpened: false,
  }),

  computed: {
    activeItemSlug() {
      return this.items.find(locale => locale.path === this.$route.path);
    },
  },

  methods: {
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

  @include media(mobile) {
    font-style: 12px !important;
    line-height: 15px;
  }

  &.active {
    color: #e23328;
  }
}

.languages-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #121212;

  transition: color 0.3s ease-out;

  position: relative;

  max-height: 160px;
  overflow-y: scroll;

  @include media(mobile) {
    width: 17px;
  }

  .language {
    color: inherit;
    font-weight: 700;
  }

  &.active {
    color: #e23328;

    .dropdown {
      display: block;
    }
  }
}

.languages {
  display: none;
  position: absolute;
  top: $header-height;
  right: 23%;

  @media screen and (max-width: 1500px) {
    right: 13%;
  }

  &.mobile-opened {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 230px;

    background: #ffffff;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

    @include media(mobile) {
      width: 100vw;
      left: 0;
    }

    .language {
      padding: 15px 0;

      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-transform: none;

      border-bottom: 1px solid #eff0f1;

      &:last-child {
        border: none;
      }
    }
  }
}
</style>
