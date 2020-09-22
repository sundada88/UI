<template>
  <div
    class="sun-circle"
    :style="style"
  >
    <svg viewBox="0 0 1060 1060">
      <path
        class="sun-circle__hover"
        :style="hoverStyle"
        :d="path"
      />
      <path
        class="sun-circle__layer"
        :style="layerStyle"
        :d="path"
      />
    </svg>
    <slot>
      <div
        v-text="text"
        class="sun-circle__text"
      />
    </slot>
  </div>
</template>

<script>
import { raf, cancel } from '../utils/raf';

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

export default {
  name: 'sun-circle',

  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'blue'
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },

  beforeCreate() {
    this.perimeter = 3140;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },

  computed: {
    style() {
      return {
        width: this.size,
        height: this.size
      };
    },

    layerStyle() {
      let offset = this.perimeter * (100 - this.value) / 100;
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: `${this.color}`,
        strokeDashoffset: `${offset}px`,
        strokeWidth: `${this.strokeWidth + 1}px`
      };
    },

    hoverStyle() {
      return {
        fill: `${this.fill}`,
        stroke: `${this.layerColor}`,
        strokeWidth: `${this.strokeWidth}px`
      };
    }
  },

  watch: {
    rate: {
      handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);
        if (this.speed) {
          cancel(this.rafId);
          this.rafId = raf(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },

  methods: {
    animate() {
      const now = Date.now();
      const progress = Math.min((now - this.startTime) / this.duration, 1);
      const rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', format(parseFloat(rate.toFixed(1))));
      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = raf(this.animate);
      }
    }
  }
};
</script>
<style lang="less">
@import "../../assets/less/var.less";
.sun-circle {
  position: relative;
  text-align: center;
  display: inline-block;

  svg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &__layer {
    fill: none;
    stroke-linecap: round;
    stroke-dasharray: 3140;
    stroke-dashoffset: 3140;
    transform: rotate(90deg);
    // should not use transform-origin: center
    // that will cause incorrect style in android devices
    transform-origin: 530px 530px;
  }

  &__text {
    top: 50%;
    left: 0;
    width: 100%;
    color: @text-color;
    position: absolute;
    transform: translateY(-50%);
  }
}

.sun-circle:before {
  content: none;
}
</style>
