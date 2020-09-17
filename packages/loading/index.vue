<template>
  <div
    :class="[`sun-loading-${type}`,'sun-loading', {[`sun-loading-${colorType}`]:colorType}]"
    :style='style'
  >
    <span :class='[`sun-loading_${type}`, "spinner"]'>
      <i
        v-for="(item, index) in (type === 'spinner' ? 12 : 0)"
        :key="index"
      />
      <svg
        v-if="type == 'circular'"
        class="sun-loading--circular"
        viewBox="25 25 50 50"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "sun-loading",
  props: {
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: '#c9c9c9'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    colorType () {
      const { color } = this
      return color === 'white' || color === 'black' ? color : ''
    },
    style () {
      return {
        // width: this.size.endsWith('px') ? this.size : `${this.size}px`,
        // height: this.size.endsWith('px') ? this.size : `${this.size}px`,
        color: this.color === 'black' ? '#c9c9c9' : this.color
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sun-loading {
  width: 30px;
  height: 30px;
  z-index: 0;
  font-size: 0;
  line-height: 0;
  position: relative;
  vertical-align: middle;
  &_circular {
    animation-duration: 2s;
  }
  &--circular {
    width: 100%;
    height: 100%;

    circle {
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
      animation: sun-circular 1.5s ease-in-out infinite;
    }
  }
  @keyframes sun-circular {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40;
    }

    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120;
    }
  }
  .spinner {
    animation-timing-function: steps(12);
  }
  &_spinner {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    box-sizing: border-box;

    animation: sun-rotate 0.8s linear infinite;
    @keyframes sun-rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
    i {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;

      &::before {
        width: 2px;
        height: 25%;
        content: ' ';
        display: block;
        margin: 0 auto;
        border-radius: 40%;
        background-color: currentColor;
      }
    }
  }
  &-white {
    .bos-loading-spinner {
      border-color: rgba(0, 0, 0, 0.1);
      border-top-color: rgba(255, 255, 255, 0.7);
    }
  }
}
.generate-spinner(@n, @i: 1) when (@i =< @n) {
  .sun-loading-spinner i:nth-of-type(@{i}) {
    opacity: 1 - (0.75 / 12) * (@i - 1);
    transform: rotate(@i * 30deg);
  }

  .generate-spinner(@n, (@i + 1));
}

.generate-spinner(12);
</style>