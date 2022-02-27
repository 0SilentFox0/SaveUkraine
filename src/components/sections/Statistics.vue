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
          <a :href="stat.link" class="link"> Source</a>
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
      stats: [
        {
          title: '50,000',
          text: 'Estimated number of casualties in Ukraine',
          link: '',
        },
        {
          title: '1.5 million',
          text: 'Internally displaced persons',
          link: '',
        },
        {
          title: '280 miles',
          text: 'Length of front line',
          link: '',
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
  padding: 30px;
  background-color: $color-white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  color: $color-black;
}

.title {
  font-family: $secondary-font;
  font-weight: bold;
  font-size: 72px;
  line-height: 72px;
}

.text {
  margin: 10px 0;

  font-size: 14px;
  line-height: 17px;
}
</style>
