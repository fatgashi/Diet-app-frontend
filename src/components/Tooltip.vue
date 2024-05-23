<!-- src/components/Tooltip.vue -->
<template>
    <div class="tooltip-container">
      <div ref="reference" @mouseover="showTooltip" @mouseleave="hideTooltip">
        <slot name="reference"></slot>
      </div>
      <div v-if="visible" ref="floating" class="tooltip-content">
        <slot name="tooltip"></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { autoUpdate, computePosition, offset, flip, shift } from '@floating-ui/vue';
  
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showTooltip() {
        this.visible = true;
        this.updatePosition();
      },
      hideTooltip() {
        this.visible = false;
      },
      updatePosition() {
        if (this.visible && this.$refs.reference && this.$refs.floating) {
          computePosition(this.$refs.reference, this.$refs.floating, {
            placement: 'left',
            middleware: [
              offset(8),
              flip({ fallbackPlacements: ['left'] }),
              shift({ padding: 8 }),
            ],
          }).then(({ x, y }) => {
            if (this.$refs.floating) {
              Object.assign(this.$refs.floating.style, {
                left: `${x}px`,
                top: `${y}px`,
              });
            }
          });
        }
      },
    },
    watch: {
      visible(value) {
        if (value) {
          if (this.$refs.reference && this.$refs.floating) {
            this.cleanup = autoUpdate(
              this.$refs.reference,
              this.$refs.floating,
              this.updatePosition
            );
          }
        } else if (this.cleanup) {
          this.cleanup();
        }
      },
    },
    beforeDestroy() {
      if (this.cleanup) {
        this.cleanup();
      }
    },
  };
  </script>
  
  <style scoped>
  .tooltip-container {
    position: relative;
  }
  .tooltip-content {
    position: absolute;
    background: #004080;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    white-space: nowrap;
    z-index: 10;
  }
  </style>