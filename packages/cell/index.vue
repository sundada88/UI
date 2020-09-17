<template>
  <div
    :class="['sun-cell', 'sun-line-bottom', {'sun-cell-click': clickable | isLink}, {'sun-cell-required': required}, {'sun-cell-center': center}]"
    @click="handleClick"
  >
    <slot name="icon">
      <icon
        v-if="icon"
        class="sun-cell-left-icon"
        :name="icon"
      ></icon>
    </slot>
    <slot name="img">
      <img
        v-if="img"
        :src="img"
        class="sun-cell-left-img"
      >
    </slot>
    <slot name="left-img">
    </slot>
    <div
      v-if="title || $slots.title"
      :class="['sun-cell-title', titleClass, {'sun-cell-title-no_lobal': !label}]"
    >
      <slot name="title">
        <span v-text="title"></span>
        <div
          v-if="label"
          v-text="label"
          :class="['sun-cell-title-label', labelClass]"
        ></div>
      </slot>
    </div>
    <div
      v-if="value || $slots.default"
      :class="['sun-cell-value', {'sun-cell-value-alone': !title && !$slots.title}, valueClass]"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <div style="display: flex; align-items: center">
        <icon
          v-if="isLink"
          class="sun-cell-right-icon"
          :name="arrowIcon"
        />
      </div>
    </slot>
    <div class="extra">
      <slot name="extra"></slot>
    </div>
    <div
      class="sun-cell__right-el"
      v-if="$slots.right"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import icon from "../icon"
import mixins from 'packages/utils/mixins/cell.js'
export default {
  mixins: [mixins],
  props: {
    clickable: Boolean,
    arrowDirection: String,
  },
  name: "sun-cell",
  components: {
    icon
  },
  methods: {
    handleClick () {
      this.$emit("click")
      // toLink跳转
      const { to, url, $router, replace } = this
      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to)
      } else if (url) {
        replace ? location.replace(url) : location.href = url
      }
    }
  },
  computed: {
    arrowIcon () {
      return this.arrowDirection ? `arrow-${this.arrowDirection}` : 'arrow'
    }
  }
}
</script>

<style lang="less" scoped>
.sun-cell {
  display: flex;
  padding: 10px 15px;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  background-color: white;
  color: #323233;
  font-size: 14px;
  overflow: hidden;
  align-items: center;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 15px;
    box-sizing: border-box;
    border-bottom: 1px #ebedf0 solid;
    transform: scaleY(0.5);
  }
  &-title {
    &-label {
      color: #7d7e80;
      font-size: 12px;
      margin-top: 3px;
      line-height: 18px;
    }
    &-no_labal {
      display: flex;
      align-items: center;
    }
  }
  &-title,
  &-value {
    flex: 1;
  }
  &-value {
    color: #7d7e80;
    overflow: hidden;
    text-align: right;
    position: relative;
    vertical-align: middle;
    &-alone {
      color: #7d7e80;
      text-align: left;
    }
  }
  .extra {
    max-width: 100px;
    padding-left: 5px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    p {
      margin: 0;
    }
  }
  &-right-icon,
  &-left-icon {
    height: 24px;
    min-width: 1em;
    font-size: 16px;
    line-height: 24px;
  }
  &-left-icon,
  &-left-img {
    margin-right: 5px;
  }
  &-left-img {
    height: 45px;
    width: 45px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 22.5px;
  }
  &-right-icon {
    color: #969799;
    margin-left: 5px;
  }
  &-click {
    &:active {
      background-color: #e8e8e8;
      // background-color: red;
    }
  }
  &-required {
    overflow: visible;
    &:before {
      content: '*';
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 6px;
      font-size: 14px;
      color: red;
    }
  }
  &-center {
    text-align: center;
  }
}
.sun-cell__right-el {
  display: flex;
  align-items: center;
}
</style>