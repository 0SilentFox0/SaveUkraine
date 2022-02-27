<template>
  <div class="label">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.label {
  width: min-content;
  padding: 8px 12px;

  color: $color-primary-50;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  background: #dff3f1;
  border-radius: 4px;
}
</style>
