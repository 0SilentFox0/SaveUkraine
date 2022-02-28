<template>
  <section class="statistics">
    <Container class="custom-container">
      <div class="content">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <span class="title">
            {{ stat.title }}
          </span>
          <span class="text">
            {{ stat.text }}
          </span>
          <a
            :href="stat.link"
            target="_blank"
            rel="noopener nofollow"
            class="link">
            {{ $t('index.stats_source') }}</a
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/ui/Container.vue';
import i18n from '@/plugins/i18n';

export default defineComponent({
  components: { Container },
  data() {
    return {
      stats: [
        {
          title: i18n.global.t('index.stats1_value'),
          text: i18n.global.t('index.stats1_text'),
          link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
        },
        {
          title: i18n.global.t('index.stats2_value'),
          text: i18n.global.t('index.stats2_text'),
          link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
        },
        {
          title: i18n.global.t('index.stats3_value'),
          text: i18n.global.t('index.stats3_text'),
          link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-container {
  width: 1240px;
}
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 100%;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;

  color: $color-black;

  background-color: $color-white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
}

.title {
  font-weight: bold;
  font-size: 72px;
  font-family: $secondary-font;
  line-height: 72px;
}

.text {
  margin: 10px 0;

  font-size: 14px;
  line-height: 17px;
}
</style>
