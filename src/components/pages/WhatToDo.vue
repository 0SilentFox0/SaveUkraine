<template>
  <section class="what-to-do">
    <Container>
      <div class="content">
        <div class="goals">
          <span class="title"> Our goal: </span>
          <div v-for="(item, index) in goals" :key="index" class="goal-item">
            <span class="goal-number">#{{ index + 1 }}</span>
            <span class="goal-text">{{ item }}</span>
          </div>
        </div>
        <div class="block how-to-help">
          <span class="title"> Ways to help </span>
          <div
            v-for="(item, index) in howToHelp"
            :key="index"
            class="how-to-help-item">
            <a :href="item.link" class="how-to-help-link link">{{
              item.text
            }}</a>
          </div>
        </div>
        <div class="block sources">
          <span class="title">Trusted news sources </span>
          <div
            v-for="(item, index) in sources"
            :key="index"
            class="how-to-help-item">
            <a :href="item.link" class="how-to-help-link link">{{
              item.text
            }}</a>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '../ui/Container.vue';

export default defineComponent({
  components: { Container },
  data() {
    return {
      goals: [
        'Stop War in Ukraine',
        'Shout out support for Ukrainian people who leave in fear',
        'Demand Global Leaders to stop the war in Ukraine by implementing economical, political and personal levarages',
      ],
      howToHelp: [
        {
          link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
          text: 'Donate to Ukrainian Army',
        },
        {
          link: 'https://savelife.in.ua/en/donate/',
          text: 'Donate to Ukrainian civilians',
        },
        {
          link: 'https://www.ukrainenow.org/i-can-host',
          text: 'Help Ukrainian refugees',
        },
      ],
      sources: [
        {
          link: '',
          text: 'Telegram channel in English',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.what-to-do {
  padding-top: 166px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  color: $color-black;
}

.title {
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 30px;

  font-family: $secondary-font;
}

.block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: calc(100% / 3);
}

.goal-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
}

.goal-number {
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;

  color: $color-brand;
}

.text {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  margin-top: 10px;
}

.how-to-help-item {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
}

.sources,
.hot-to-help {
  padding-left: 40px;
}
</style>
