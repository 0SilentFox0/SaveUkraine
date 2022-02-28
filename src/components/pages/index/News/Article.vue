<template>
  <a :href="article.url" rel="noopener nofollow" target="_blank">
    <article :class="size" class="article">
      <div class="image">
        <ImageWebpWrapper
          :height="imgSize[size].height"
          :image-default="article.img.png"
          :image-webp="article.img.webp"
          :width="imgSize[size].width" />
      </div>
      <div class="info">
        <div v-if="article.resourceIcon" class="resource-logo">
          <img v-lazy="{ src: article.resourceIcon }" alt="" />
        </div>
        <div class="title">{{ article.title }}</div>
        <div class="description">{{ article.description }}</div>
      </div>
    </article>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ImageWebpWrapper from '@/components/ui/ImageWebpWrapper.vue';
import { INews } from '@/components/pages/index/News/News.types';

export default defineComponent({
  components: { ImageWebpWrapper },
  props: {
    article: {
      type: Object as PropType<INews.Article>,
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
.article {
  margin-bottom: 40px;

  &.big {
    display: flex;
    gap: 40px;
  }
}

.image {
  position: relative;

  flex-shrink: 0;

  .medium & {
    width: 580px;
    height: 350px;
    margin-bottom: 30px;
  }

  .small & {
    width: 373.33px;
    height: 239px;
    margin-bottom: 30px;
  }

  .big & {
    width: 800px;
    height: 570px;
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

.resource-logo {
  margin-bottom: 10px;

  .big & {
    margin-bottom: 20px;
  }
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
  margin-bottom: 10px;

  color: #242424;
  font-weight: bold;
  font-size: 30px;
  font-family: Bebas Neue;
  font-style: normal;
  line-height: 30px;

  transition: all 0.3s ease-out;

  .article:hover & {
    color: #e23328;
    text-decoration-line: underline;
  }

  .medium & {
    margin-bottom: 20px;
  }

  .big & {
    margin-bottom: 30px;

    font-size: 48px;
    line-height: 50px;
  }
}
</style>
