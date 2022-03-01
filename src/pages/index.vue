<template>
  <main class="main">
    <HeadWrapper
      title="Stop war in Ukraine"
      description="Since February 24th, Ukraine is being attacked by Russian armed forces. Thanks to the unity of Ukrainians, we are standing strong but need help to get through this."
      :route="$route.path" />
    <Welcome :stats="stats.en">
      <template #firstText>
        On February, 24th its whole territory
        <span class="accent-text">was attacked by Russian armed forces</span> -
        from the territories of Russia and Belarus, from the sea, and the sky.
        They are deploying paratroopers, carrying out air strikes and shoot at
        us from across the border.
      </template>
      <template #secondText>
        Thanks to the Army and the unity of Ukrainians, we are standing strong
        but
        <span class="accent-text"> need all the help we can get. </span>
      </template>
      <template #buttonText>DONATE TO HELP UKRAINE </template>
    </Welcome>
    <WhatToDo :help-info="whatToDo.en" />
    <News :news="news">
      <template #title>LATEST NEWS</template>
    </News>
    <Media :photos="images" :videos="videos">
      <template #photos-title>Photos</template>
      <template #videos-title>Video</template>
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
import { news } from '@/components/pages/index/News/news_en';
import { whatToDo } from '@/components/pages/index/WhatToDo/content';
import { images, videos } from '@/components/pages/index/Media/media_en';

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
