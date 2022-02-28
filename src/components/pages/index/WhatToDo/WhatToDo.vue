<template>
  <section class="what-to-do">
    <Container>
      <div class="content">
        <div class="block goals">
          <span class="title"> {{ helpInfo.goal.title }} </span>
          <div class="goal-item-box">
            <div
              v-for="(item, index) in helpInfo.goal.content"
              :key="index"
              class="goal-item">
              <span class="goal-number">#{{ index + 1 }}</span>
              <span class="goal-text">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="block how-to-help">
          <span class="title"> {{ helpInfo.howToHelp.title }} </span>
          <div
            v-for="(item, index) in helpInfo.howToHelp.content"
            :key="index"
            class="how-to-help-item">
            <a
              :href="item.link"
              target="_blank"
              class="how-to-help-link link"
              >{{ item.text }}</a
            >
          </div>
        </div>
        <div class="block sources">
          <span class="title">{{ helpInfo.sources.title }} </span>
          <div
            v-for="(item, index) in helpInfo.sources.content"
            :key="index"
            class="how-to-help-item">
            <a
              :href="item.link"
              target="_blank"
              class="how-to-help-link link"
              >{{ item.text }}</a
            >
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/ui/Container.vue';

export default defineComponent({
  components: { Container },
  props: {
    helpInfo: {
      type: Object,
      required: true,
    },
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
