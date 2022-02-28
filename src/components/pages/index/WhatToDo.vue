<template>
  <section class="what-to-do">
    <Container>
      <div class="content">
        <div class="block goals">
          <span class="title"> Our goal: </span>
          <div class="goal-item-box">
            <div v-for="(item, index) in goals" :key="index" class="goal-item">
              <span class="goal-number">#{{ index + 1 }}</span>
              <span class="goal-text">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="block how-to-help">
          <span class="title"> How to help </span>
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
import Container from '../../ui/Container.vue';

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
          link: 'https://www.dls.gov.ua/en/government-websites-of-ukraine/',
          text: 'Government websites of Ukraine',
        },
        {
          link: 'https://www.president.gov.ua/en',
          text: 'President of Ukraine - Official website',
        },
        {
          link: 'https://twitter.com/DefenceU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
          text: 'Defence of Ukraine on Twitter ',
        },
        {
          link: 'https://www.bbc.com/news/topics/cx1m7zg0gzdt/ukraine',
          text: 'BBC News - Ukraine',
        },
        {
          link: 'https://www.kyivpost.com/',
          text: 'Kyiv Post - Ukraine’s English-language newspaper',
        },
        {
          link: 'https://ukraine.ua/ukraine-news/',
          text: 'Ukraine NOW ',
        },
        {
          link: 'https://twitter.com/i/lists/1497381085268922370',
          text: 'Ukraine at war On Twitter ',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.what-to-do {
  padding-top: 166px;
  padding-bottom: 100px;

  @include media(tablet) {
    padding-top: 440px;
  }
}

.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  color: $color-black;

  @include media(tablet) {
    grid-template-columns: 1fr;
  }
}

.title {
  margin-bottom: 30px;

  font-weight: bold;
  font-size: 36px;

  font-family: $secondary-font;
  line-height: 36px;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.goals {
  @include media(tablet) {
    padding-bottom: 20px;

    border-bottom: 1px solid $color-divider;
  }
}

.goal-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.goal-number {
  color: $color-brand;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}

.goal-text {
  max-width: 65%;

  margin-top: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.how-to-help-item {
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
}

.sources,
.how-to-help {
  padding-left: 40px;

  border-left: 1px solid $color-divider;

  @include media(tablet) {
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 0;

    border-bottom: 1px solid $color-divider;

    border-left: none;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
