<template>
  <Container class="news">
    <div class="live-label">
      <span class="circle" />
      <span class="text">Live</span>
    </div>
    <div class="title"><slot name="title"></slot></div>
    <div class="row-1">
      <Article :article="news[0]" size="big" />
    </div>
    <div class="row-2">
      <Article :article="news[1]" size="medium" />
      <Article :article="news[2]" size="medium" />
    </div>
    <div class="grid">
      <Article
        v-for="article in news.slice(3)"
        :key="article.link"
        :article="article" />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Container from '@/components/ui/Container.vue';
import Article from '@/components/pages/index/News/Article.vue';
import { News } from '@/database/pageInfo.interface';

export default defineComponent({
  components: { Article, Container },
  props: {
    news: {
      type: Array as PropType<News.IArticle[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.news {
  margin-bottom: 70px;
}

.live-label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  .circle {
    width: 20px;
    height: 20px;
    margin-right: 10px;

    background-color: $color-brand;
    border-radius: 50%;
    box-shadow: 0 0 17px $color-brand-hover;

    animation: pulsate 2s ease-out infinite;
  }

  .text {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-transform: uppercase;
  }
}

.title {
  margin-bottom: 40px;

  color: $color-black;
  font-weight: bold;
  font-size: 72px;
  font-family: $secondary-font;
  font-style: normal;
  line-height: 72px;

  @include media(tablet) {
    font-size: 44px;
    line-height: 50px;
  }
}

.row-1 {
  width: 100%;
}

.row-2 {
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  @include media(laptop) {
    grid-template-columns: 1fr;
  }
  @include media(tablet) {
    grid-template-columns: 1fr;
  }
}

.grid {
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  @include media(laptop) {
    grid-template-columns: 1fr;
  }
  @include media(tablet) {
    grid-template-columns: 1fr;
  }
}

@keyframes pulsate {
  0% {
    box-shadow: 0 0 0 $color-brand-hover;
  }
  50% {
    box-shadow: 0 0 13px $color-brand-hover;
  }
  100% {
    box-shadow: 0 0 0 $color-brand-hover;
  }
}

@-webkit-keyframes pulsate {
  0% {
    box-shadow: 0 0 0 $color-brand-hover;
  }
  50% {
    box-shadow: 0 0 13px $color-brand-hover;
  }
  100% {
    box-shadow: 0 0 0 $color-brand-hover;
  }
}
</style>
