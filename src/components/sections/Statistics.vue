<template>
  <section class="statistics">
    <div class="custom-container">
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
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import i18n from '@/plugins/i18n';

export default defineComponent({
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
  position: relative;

  width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  @include media(laptop) {
    max-width: 900px;
  }

  @include media(tablet) {
    max-width: 540px;
  }

  @include media(mobile) {
    max-width: 420px;
  }
}
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  width: 100%;

  @include media(tablet) {
    grid-template-columns: 1fr;
  }
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

  @include media(mobile) {
    padding: 30px 40px;
  }
}

.title {
  font-weight: bold;
  font-size: 72px;
  font-family: $secondary-font;
  line-height: 72px;

  @include media(tablet) {
    font-size: 62px;
  }
}

.text {
  margin: 10px 0;

  font-size: 14px;
  line-height: 17px;
}
</style>
