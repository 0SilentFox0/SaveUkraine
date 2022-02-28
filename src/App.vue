<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition mode="out-in">
        <suspense>
          <component :is="Component" :key="route" />
          <template #fallback>
            <div>Loading...</div>
          </template>
        </suspense>
      </transition>
    </template>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import i18n from '@/plugins/i18n';

export default defineComponent({
  mounted() {
    i18n.global.locale.value = (this.$route.query.lang as string) || 'en';
  },
});
</script>

<style lang="scss" scoped></style>
