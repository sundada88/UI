<template>
  <div
    :class="['sun-tag', {
    'sun-tag--plain': plain,
    'sun-tag--round': round,
    'sun-tag--mark': mark,
    [`sun-tag--${size}`]: size,
    'sun-hairline--surround': plain
  }]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
}
export default {
  name: 'sun-tag',
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style () {
      const color = this.color || COLOR_MAP[this.type] || GRAY_DARK;
      const key = this.plain ? 'color' : 'backgroundColor';
      const style = { [key]: color };

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    }
  }
}
</script>

<style lang="less">
@import "../../assets/less/var.less";
.sun-tag {
  color: @white;
  font-size: 10px;
  padding: 0.2em 0.5em;
  line-height: normal;
  border-radius: 0.2em;
  display: inline-block;

  &::after {
    border-color: currentColor;
    border-radius: 0.4em;
  }

  &--mark {
    padding-right: 0.6em;
    border-radius: 0 0.8em 0.8em 0;

    &::after {
      border-radius: 0 1.6em 1.6em 0;
    }
  }

  &--round {
    border-radius: 0.8em;

    &::after {
      border-radius: 1.6em;
    }
  }

  &--medium {
    font-size: 12px;
  }

  &--large {
    font-size: 14px;
  }
}
</style>