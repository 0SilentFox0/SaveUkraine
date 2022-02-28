<template>
  <main class="main">
    <HeadWrapper
      title="Stop war in Ukraine"
      description="Since February 24th, Ukraine is being attacked by Russian armed forces. Thanks to the unity of Ukrainians, we are standing strong but need help to get through this."
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
    <!-- <WhatToDo />
    <News />
    <Media /> -->
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

export default defineComponent({
  components: { News, Welcome, WhatToDo, Media, HeadWrapper },
  data() {
    return {
      stats,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
