<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="v-button"
    v-bind="$attrs"
    @click="buttonClick">
    <span class="text">
      <slot></slot>
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { VButtonInterface } from './VButton.interfaces';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<VButtonInterface.Props.Type>,
      required: false,
      default: 'basic',
    },

    size: {
      type: String as PropType<VButtonInterface.Props.Size>,
      default: 'regular',
    },

    justify: {
      type: String as PropType<VButtonInterface.Style['justifyContent']>,
      default: 'center',
    },
    gtagEvent: { default: '', type: String, required: false },
    to: { default: '', type: [String, Object] },
    tag: { type: String, default: 'button' },
    fluid: { type: Boolean, default: false },
    maxWidth: { type: String, default: 'auto' },
  },

  emits: ['click'],

  computed: {
    classes(): VButtonInterface.Class {
      return [
        this.size,
        this.type,
        {
          fluid: this.fluid,
        },
      ];
    },
    styles(): VButtonInterface.Style {
      return {
        justifyContent: this.justify,
        maxWidth: this.maxWidth,
      };
    },
  },

  methods: {
    buttonClick(this: any, e: Event) {
      if (this.gtagEvent) this.$gtag('event', this.gtagEvent);

      if (this.to) this.$router.push(this.to);

      this.$emit('click', e);
    },
  },
});
</script>

<style lang="scss" scoped>
.v-button {
  z-index: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: $color-white;

  font-weight: 600;

  outline: none;
  cursor: pointer;

  transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease;

  /** Props => Disabled */
}

// Props => Size
.regular {
  min-height: 50px;
  padding: 16px 24px;

  font-size: 14px;
  line-height: 17px;
}

.small {
  min-height: 42px;
  padding: 12.5px 24px;

  font-size: 14px;
  line-height: 17px;
}

// Props => Type
.basic {
  color: $color-white;

  background: $color-brand;

  &:hover {
    background-color: $color-brand-hover;
  }
}

.white {
  color: $color-black;

  background-color: $color-white;

  &:hover {
    color: $color-brand;
  }
}
</style>
