<template>
  <a
    :href="article.link"
    rel="noopener nofollow"
    target="_blank"
    class="article-link">
    <div :class="size" class="article">
      <div class="image">
        <img
          v-lazy="{
            src: `https://stopwarukraine.directus.app/assets/${article.image.id}`,
          }"
          class="news-image"
          alt="" />
      </div>
      <div class="info">
        <img
          v-lazy="{
            src: `https://stopwarukraine.directus.app/assets/${article.logo.id}`,
          }"
          class="resource-logo-img"
          alt="" />
        <div class="title">{{ article.title }}</div>
        <div class="description">{{ article.preview_text }}</div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { News } from '@/database/pageInfo.interface';

export default defineComponent({
  props: {
    article: {
      type: Object as PropType<News.IArticle>,
      required: true,
    },
    size: {
      type: String as PropType<'big' | 'medium' | 'small'>,
      default: 'small',
    },
  },
  data: () => ({
    imgSize: {
      big: {
        width: 800,
        height: 570,
      },
      medium: {
        width: 580,
        height: 350,
      },
      small: {
        width: 373.33,
        height: 239,
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
.article-link {
  width: 100%;
}
.article {
  margin-bottom: 40px;

  &.big {
    display: flex;
    gap: 40px;
    @include media(laptop) {
      flex-direction: column;
    }
    @include media(tablet) {
      flex-direction: column;
    }
  }
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image {
  position: relative;

  flex-shrink: 0;

  .medium & {
    width: 580px;
    height: 350px;
    margin-bottom: 30px;

    @include media(laptop) {
      width: 100%;
      height: 100%;
    }
    @include media(tablet) {
      max-width: 500px;
      height: 350px;
    }
    @include media(mobile) {
      width: 100%;
      max-width: 350px;
      height: 239px;
    }
  }

  .small & {
    width: 373.33px;
    height: 239px;
    margin-bottom: 30px;
    @include media(laptop) {
      width: 100%;
      height: 100%;
    }
    @include media(tablet) {
      width: 500px;
      height: 350px;
    }

    @include media(mobile) {
      width: 100%;
      max-width: 350px;
      height: 239px;
    }
  }

  .big & {
    width: 800px;
    height: 570px;
    @include media(laptop) {
      width: 100%;
      height: 100%;
    }
    @include media(tablet) {
      max-width: 500px;
      height: 350px;
    }

    @include media(mobile) {
      width: 100%;
      max-width: 350px;
      height: 239px;
    }
  }

  &:before {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    background: rgba(255, 124, 124, 0.2);
    visibility: hidden;
    opacity: 0;

    transition: all 0.3s ease-out;

    content: '';
  }

  .article:hover &:before {
    visibility: visible;
    opacity: 1;
  }

  :deep(img) {
    width: 100%;
    height: 100%;
  }
}

.info {
  .big & {
    padding-top: 20px;

    border-top: 4px solid #e23328;
  }
}

.resource-logo-img {
  width: 100px;
  margin-bottom: 20px;
}

.description {
  color: #242424;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  .big & {
    font-weight: normal;
    line-height: 22px;
  }
}

.title {
  margin-bottom: 20px;

  /* Black */

  color: #242424;

  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  transition: all 0.3s ease-out;

  .article:hover & {
    color: #e23328;
    text-decoration-line: underline;
  }

  .big & {
    margin-bottom: 30px;

    font-size: 48px;
    font-family: Bebas Neue;
    line-height: 50px;

    @include media(tablet) {
      font-size: 34px;
    }
  }
}
</style>
