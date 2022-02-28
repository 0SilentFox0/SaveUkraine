<template>
  <Container class="news">
    <div class="live-label">
      <img :src="liveLabel" width="83" height="30" />
    </div>
    <div class="title">latest news</div>
    <Article :article="news[0]" size="big" />
    <div class="row-2">
      <Article :article="news[1]" size="medium" />
      <Article :article="news[2]" size="medium" />
    </div>
    <div class="grid">
      <Article
        v-for="article in news.slice(3)"
        :key="article.url"
        :article="article" />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import liveLabel from '@/assets/img/icons/live-label.svg?url';
import Container from '@/components/ui/Container.vue';
import Article from '@/components/pages/index/News/Article.vue';
import { news } from '@/components/pages/index/content';

export default defineComponent({
  components: { Article, Container },
  data: () => ({
    liveLabel,
    news,
  }),
});
</script>

<style lang="scss" scoped>
.news {
  margin-bottom: 70px;
}

.live-label {
  width: 83px;
  height: 30px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
  }
}

.title {
  margin-bottom: 40px;

  color: #242424;
  font-weight: bold;
  font-size: 72px;
  font-family: Bebas Neue;
  font-style: normal;
  line-height: 72px;
}

.row-2 {
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr;
}

.grid {
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
