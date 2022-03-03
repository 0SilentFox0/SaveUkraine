<template>
  <section class="welcome">
    <!-- <TheHeader v-once /> -->
    <Container>
      <div class="content">
        <VButton to="/" class="btn"> Back to main page </VButton>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VButton from '@/components/ui/VButton/VButton.vue';
import Container from '@/components/ui/Container.vue';

export default defineComponent({
  components: { VButton, Container },
});
</script>

<style lang="scss" scoped>
.welcome {
  position: relative;

  width: 100%;
  height: 100vh;

  background-image: url('@/assets/img/pages/index/home-background.png');
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
