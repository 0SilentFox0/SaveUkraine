<template>
  <main class="main">
    <HeadWrapper
      title="Stop war in Ukraine"
      description="Since February 24th, Ukraine is being attacked by Russian armed forces. Thanks to the unity of Ukrainians, we are standing strong but need help to get through this."
      :route="$route.path" />
    <Welcome :stats="stats.ru">
      <template #firstText>
        24 февраля 2022 года Украина
        <span class="accent-text"
          >подверглась ракетному обстрелу российскими войсками</span
        >
        с территорий России и Беларуси, с моря и неба. Началась война. Войска
        оккупантов перебрасывают десантников, наносят авиаудары и стреляют по
        нам с Белорусии.
      </template>
      <template #secondText>
        Благодаря армии и единству украинцев мы стоим крепко, но
        <span class="accent-text">нуждаемся в любой помощи</span>, которую можем
        получить.
      </template>
      <template #buttonText> СДЕЛАТЬ ПОЖЕРТВОВАНИЕ </template>
    </Welcome>
    <WhatToDo :help-info="whatToDo.ru" />
    <News :news="news"><template #title>ПОСЛЕДНИЕ НОВОСТИ</template></News>
    <!--    <Media /> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/index/Welcome.vue';
import WhatToDo from '@/components/pages/index/WhatToDo/WhatToDo.vue';
import News from '@/components/pages/index/News/News.vue';
import Media from '@/components/pages/index/Media/Media.vue';
import HeadWrapper from '@/components/ui/HeadWrapper.vue';

import { stats } from '@/components/sections/content';
import { news } from '@/components/pages/index/News/news_ru';
import { whatToDo } from '@/components/pages/index/WhatToDo/content';

export default defineComponent({
  components: { News, Welcome, WhatToDo, Media, HeadWrapper },
  data() {
    return {
      stats,
      news,
      whatToDo,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}

.accent-text {
  color: $color-brand;
}
</style>
