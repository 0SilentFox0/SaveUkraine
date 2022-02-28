<template>
  <main class="main">
    <HeadWrapper
      title="Остановим агресию против Украины вместе"
      description="Смотри как Российская армия омывается в крови невинных украинских граждан. Каждый должен знать правду, и подняться в защиту человеческой жизни."
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
    <Media :photos="images" :videos="videos">
      <template #photos-title>ФОТОГрАФИИ</template>
      <template #videos-title>Видеоматериалы</template>
    </Media>
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
import { images, videos } from '@/components/pages/index/Media/media_ru';

export default defineComponent({
  components: { News, Welcome, WhatToDo, Media, HeadWrapper },
  data() {
    return {
      stats,
      news,
      whatToDo,
      images,
      videos,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  background: #eff0f1;
}

.accent-text {
  color: $color-brand;
}
</style>
