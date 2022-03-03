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
      v-for="language in languages"
      :key="language.slug"
      :to="language.path"
      :class="{ active: language.path === $route.path }"
      class="language"
      >{{ dropdownOpened ? language.name : language.slug }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';
import { usePageInfoStore } from '@/store/pageInfo';
import { ILang } from '@/database/pageInfo.interface';

export default defineComponent({
  components: { SvgIcon },
  setup() {
    const pageStore = usePageInfoStore();

    return { pageStore };
  },
  data: () => ({
    dropdownOpened: false,
  }),

  computed: {
    languages(): ILang[] {
      return this.pageStore.languages;
    },
    activeItemSlug(): ILang {
      return this.languages.find(
        locale => locale.path === this.$route.path,
      ) as ILang;
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

  @include media(mobile) {
    font-style: 12px !important;
    line-height: 15px;
  }

  &.active {
    color: #e23328;
  }
}

.languages-mobile {

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 160px;
  overflow-y: scroll;

  color: #121212;

  cursor: pointer;

  transition: color 0.3s ease-out;

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
  position: absolute;
  top: $header-height;
  right: 23%;

  display: none;

  flex-wrap: wrap;
  width: 460px;
  height: 500px;

  @media screen and (max-width: 1500px) {
    right: 13%;
  }

  &.mobile-opened {
    display: flex;
    flex-direction: column;
    padding: 5px;

    background: #ffffff;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

    @include media(mobile) {
      left: 0;

      width: 100vw;
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
