<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="v-button"
    v-bind="$attrs"
    @click="buttonClick">
    <!--    <SvgIcon-->
    <!--      v-if="iconLeft"-->
    <!--      :key="iconLeft"-->
    <!--      :height="iconSizes[size]"-->
    <!--      :name="iconLeft"-->
    <!--      :width="iconSizes[size]"-->
    <!--      class="icon-left"-->
    <!--      fill="currentColor" />-->

    <!--    <span v-if="!isIcon">-->
    <span class="text">
      <slot></slot>
    </span>
    <!--    </span>-->

    <!--    <SvgIcon-->
    <!--      v-if="iconRight"-->
    <!--      :key="iconRight"-->
    <!--      :height="iconSizes[size]"-->
    <!--      :name="iconRight"-->
    <!--      :width="iconSizes[size]"-->
    <!--      class="icon-right"-->
    <!--      fill="currentColor" />-->
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
      default: 'primary',
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
    // rounded: { type: Boolean, default: false },
    // isIcon: { type: Boolean, default: false },
    // iconLeft: { type: String, default: '' },
    // iconRight: { type: String, default: '' },
  },

  emits: ['click'],

  // data: () => ({
  //   iconSizes: {
  //     large: '14',
  //     big: '14',
  //     medium: '14',
  //     small: '12',
  //   },
  // }),

  computed: {
    classes(): VButtonInterface.Class {
      return [
        this.size,
        this.type,
        {
          // 'is-icon': this.isIcon,
          // rounded: this.rounded,
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

  color: #ffffff;

  font-weight: 600;

  border-radius: 5px;
  outline: none;
  cursor: pointer;

  transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease;

  //&:not(.is-icon) {
  //  .icon-left {
  //    margin-right: 12px;
  //  }
  //
  //  .icon-right {
  //    margin-left: 12px;
  //  }
  //}

  /** Props => Disabled */
  &:disabled {
    color: #8287a6;

    background-color: #f7f8fa;
    border-color: #f7f8fa;

    pointer-events: none;
  }
}

.text {
  z-index: 3;
}

.is-icon.rounded {
  border-radius: 50%;
}

// Props => Size
.regular {
  min-height: 50px;
  padding: 15.5px 36px;

  font-size: 16px;
  line-height: 19px;
}

.small {
  min-height: 42px;
  padding: 12.5px 24px;

  font-size: 14px;
  line-height: 17px;
}

// Props => Type
.basic {

  color: $color-basic-80;

  background: $color-white;

  border: 1px solid $color-basic-20;

  box-shadow: 0px 1px 4px rgba(0, 12, 118, 0.08);

  &:hover {
    background: $color-basic-0;
  }

  &:active {
    background: $color-basic-5;
  }
}

.primary {
  position: relative;

  background: linear-gradient(180deg, #23a494 0%, #1d8a7d 100%);

  &:active {
    background: linear-gradient(180deg, #1d8a7d 0%, #23a494 100%);
  }
}

.outline {
  position: relative;

  color: white;

  background: transparent;

  border: 2px solid $color-basic-70;
  box-shadow: 0px 1px 4px rgba(0, 12, 118, 0.08);

  &:hover {
    color: white !important;

    border: 2px solid transparent;
  }

  &:active {
    color: white !important;

    background: linear-gradient(180deg, #1d8a7d 0%, #23a494 100%);
    border: 2px solid transparent;
  }
}

.primary:before,
.outline:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  background-image: linear-gradient(
    180deg,
    #23a494 0%,
    #3accba 0%,
    #229c8e 100%
  );
  border-radius: 5px;
  opacity: 0;

  transition: opacity 0.3s;

  content: '';
}

.primary:hover::before,
.outline:hover::before {
  opacity: 1;
}

.primary:active::before,
.outline:active::before {
  background-image: linear-gradient(180deg, #1d8a7d 0%, #23a494 100%);
  opacity: 1;
}
</style>
