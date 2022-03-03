<template>
  <transition name="fade">
    <div v-if="isOpened" class="popup-mask">
      <div class="popup-container" :style="containerStyle">
        <div class="close-icon" @click="$emit('close')">
          <img :src="closeIcon" alt="close" />
        </div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import closeIcon from '@/assets/img/icons/close.svg?url';

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '550px',
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],

  data: () => ({
    closeIcon,
  }),

  computed: {
    containerStyle(): object {
      return {
        'max-width': this.width,
      };
    },
  },

  watch: {
    isOpened: {
      handler(isOpened) {
        if (typeof document === 'undefined') {
          return;
        }

        if (isOpened) {
          document.querySelector('body').classList.add('scroll-off');
          document.addEventListener('keydown', this.handleCloseOnEscape);
        } else {
          document.querySelector('body').classList.remove('scroll-off');
          document.removeEventListener('keydown', this.handleCloseOnEscape);
        }
      },
      immediate: true,
    },
  },

  mounted() {
    document.body.appendChild(this.$el);
  },

  methods: {
    handleCloseOnEscape(e: any) {
      if (e.keyCode === 27) {
        this.$emit('close');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.popup-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9997;

  width: 100vw;
  height: 100vh;

  background-color: rgba(82, 82, 82, 0.5);
}

.popup-container {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9998;

  width: 100%;
  padding: 0 10px;

  border-radius: 16px;
  transform: translate(-50%, -50%);

  transition: opacity 0.3s ease;
}

.close-icon {
  position: absolute;
  top: 19px;
  right: 22px;
  z-index: 9998;

  cursor: pointer;
}
</style>

<style>
.scroll-off {
  margin-right: 17px;
  overflow-y: hidden;
}
</style>
