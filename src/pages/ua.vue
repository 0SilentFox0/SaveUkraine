<template>
  <main class="main">
    <HeadWrapper
      title="Зупинимо агресію проти України разом"
      description="Подивись, як російська армія вмивається в крові українських мирних жителів. Світ ніяк не може виправдати це. Ви повинні знати правду."
      :route="$route.path" />
    <Welcome :stats="stats.ua">
      <template #firstText>
        Вранці
        <span class="accent">
          24-го лютого 2022-го року, по всій Україні пролунали вибухи. Росія
          атакувала з неба та моря, оголосивши нам війну.</span
        >
        Окупант перекидає на нашу територію десантні війська, стріляє по нам
        із-за кордону з Білоруссю.
      </template>
      <template #secondText>
        З нашою армію та нашою єдністю, ми міцно стоїмо проти агресора. Але наша
        мета - зупинити війну. Для цього
        <span class="accent"> нам потрібна уся можлива допомога.</span>
      </template>
      <template #buttonText> ПОЖЕРТВУВАТИ КОШТИ </template>
    </Welcome>
    <WhatToDo :help-info="whatToDo.ua" />
    <News :news="news"><template #title>Останні новини</template></News>
    <Media :photos="images" :videos="videos">
      <template #photos-title>ФОТОГРАФIЇ</template>
      <template #videos-title>ВІДЕОМАТЕРІАЛИ</template>
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
import { news } from '@/components/pages/index/News/news_ua';
import { whatToDo } from '@/components/pages/index/WhatToDo/content';
import { images, videos } from '@/components/pages/index/Media/media_ua';

export default defineComponent({
  components: { News, Welcome, WhatToDo, Media, HeadWrapper },
  data() {
    return {
      stats,
      whatToDo,
      news,
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
