<template>
  <component
    :is="tag"
    :class="['sun-row', {'sun-row-flex': flex, [`sun-row-align-${align}`]: align && flex, [`sun-row-justify-${justify}`]: flex && justify}]"
    :style="style"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'sun-row',
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    flex () {
      return this.type === 'flex'
    },
    style () {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
}
</script>

<style lang="less" scoped>
.sun-row {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  &-flex {
    display: flex;

    &::after {
      display: none;
    }
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-justify-space-between {
    justify-content: space-between;
  }

  &-justify-space-around {
    justify-content: space-around;
  }

  &-align-center {
    align-items: center;
  }

  &-align-bottom {
    align-items: bottom;
  }
}
</style>