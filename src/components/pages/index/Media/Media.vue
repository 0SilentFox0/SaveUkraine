<template>
  <section class="media">
    <Container>
      <Photos/>
    </Container>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Container from "@/components/ui/Container.vue";
import Photos from "@/components/pages/index/Media/Photos/Photos.vue";

export default defineComponent({
  components: {Photos, Container}
});
</script>

<style lang="scss" scoped>
.media {
  padding-top: 100px;
  padding-bottom: 190px;

  background: #121212;
}
</style>
