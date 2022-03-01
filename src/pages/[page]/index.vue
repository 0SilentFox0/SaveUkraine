<!-- <template>
  <main class="main">
    <HeadWrapper
      :title="pageInfo.seo.title || ''"
      :description="pageInfo.seo.description || ''"
      :route="$route.path" />
    <Welcome :stats="pageInfo.statistics" :text="pageInfo.banner_text">
      <template #buttonText>
        {{ pageInfo.bunner_button }}
      </template>
    </Welcome>
    <WhatToDo :help-info="pageInfo.how_to_help" />
    <News :news="pageInfo.news">
      <template #title>{{ pageInfo.how_to_help_title }}</template>
    </News>
    <Media :photos="pageInfo.media.photos" :videos="pageInfo.media.videos">
      <template #photos-title>{{ pageInfo.photos_title }}</template>
      <template #videos-title>{{ pageInfo.videos_title }}</template>
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

import { usePageInfoStore } from '@/store/pageInfo';
import { IPageInfo } from '@/database/pageInfo.interface';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    News,
    Welcome,
    WhatToDo,
    Media,
    HeadWrapper,
  },
  async setup() {
    const pageStore = usePageInfoStore();
    const langSlug = useRoute()?.params.lang as string;

    await pageStore.getPageInfo();

    return {
      pageStore,
      langSlug,
    };
  },
  computed: {
    pageInfo(): IPageInfo {
      return this.pageStore.pageInfo.find(
        page => page.language === this.langSlug.replace('/', ''),
      ) as IPageInfo;
    },
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
</style> -->
