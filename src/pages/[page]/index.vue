<template>
  <main class="main">
    <HeadWrapper
      :title="pageInfo.seo ? pageInfo.seo[0].title : ''"
      :description="pageInfo.seo ? pageInfo.seo[0].description : ''"
      :route="$route.path" />
    <TheHeader>
      <template #headerButton>{{ pageInfo.header_button_text }}</template>
    </TheHeader>
    <Welcome :stats="pageInfo.statistics" :text="pageInfo.banner_text">
      <template #buttonText>
        {{ pageInfo.banner_button_text }}
      </template>
    </Welcome>
    <WhatToDo
      :goals="pageInfo.goals"
      :how-to-help="pageInfo.how_to_help"
      :trusted-source="pageInfo.trusted_sources">
      <template #goalTitle>
        {{ pageInfo.goal_title }}
      </template>
      <template #howToHelpTitle>
        {{ pageInfo.how_to_help_title }}
      </template>
      <template #sourceTitle>
        {{ pageInfo.trusted_sources_title }}
      </template>
    </WhatToDo>
    <News :news="pageInfo.news">
      <template #title>{{ pageInfo.how_to_help_title }}</template>
    </News>
    <Medias :videos="pageInfo.videos" :photos="pageInfo.photos">
      <template #photos-title>{{ pageInfo.photos_title }}</template>
      <template #videos-title>{{ pageInfo.videos_title }}</template>
    </Medias>
    <TheFooter>
      <template #contantText>
        {{ pageInfo.footer_contact_text }}
      </template>
      <template #contributeText>
        {{ pageInfo.footer_contribute_text }}
      </template>
    </TheFooter>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from '@/components/pages/index/Welcome.vue';
import WhatToDo from '@/components/pages/index/WhatToDo/WhatToDo.vue';
import News from '@/components/pages/index/News/News.vue';
import Medias from '@/components/pages/index/Media/Media.vue';
import HeadWrapper from '@/components/ui/HeadWrapper.vue';
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter/TheFooter.vue';

import { usePageInfoStore } from '@/store/pageInfo';
import { IPageInfo } from '@/database/pageInfo.interface';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    News,
    TheHeader,
    TheFooter,
    Welcome,
    WhatToDo,
    Medias,
    HeadWrapper,
  },
  async setup() {
    const pageStore = usePageInfoStore();
    const lang = useRoute()?.params.page as string;

    await Promise.all([
      pageStore.getPageInfo({ lang }),
      pageStore.getLanguages(),
    ]);

    return {
      pageStore,
    };
  },
  computed: {
    pageInfo(): IPageInfo {
      return this.pageStore.pageInfo;
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;

  background: #eff0f1;
}
</style>
