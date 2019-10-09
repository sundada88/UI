<template>
  <div class="sun-collapse-item">
    <sun-cell
      v-bind="$props"
      :class="['sun-collapse-item-title', {'sun-collapse-item-disabled': disabled}, {'sun-collapse-item-expanded': expanded}]"
      @click="onClick"
    >
      <slot
        name="title"
        slot="title"
      />
      <slot
        name="icon"
        slot="icon"
      />
      <slot name="value" />
      <slot
        name="right-icon"
        slot="right-icon"
      />
    </sun-cell>
    <div
      v-if="inited"
      v-show="show"
      ref="wrapper"
      class="sun-collapse-item-wrapper"
      @transitionend="onTransitionEnd"
    >
      <div
        ref="content"
        class="sun-collapse-item-content"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "packages/utils/mixins/cell.js"
import findParent from "packages/utils/mixins/find-parent.js"
export default {
  name: "sun-collapse-item",
  mixins: [mixins, findParent],
  props: {
    name: [String, Number],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      inited: null,
      show: null
    }
  },
  computed: {
    items () {
      return this.$parent.items
    },
    index () {
      return this.items.indexOf(this)
    },
    currentName () {
      return this.name ? this.name : this.index
    },
    expanded () {
      if (!this.parent) {
        return null
      }
      const { value } = this.parent
      return this.parent.accordion ? value === this.currentName : value.some(name => name === this.currentName)
    }
  },
  watch: {
    expanded (expanded, prev) {
      if (prev === null) {
        return;
      }

      if (expanded) {
        this.show = true
        this.inited = true
      }

      this.$nextTick(() => {
        const { content, wrapper } = this.$refs
        if (!content || !wrapper) {
          return;
        }

        const contentHeight = `${content.clientHeight}px`
        wrapper.style.height = expanded ? 0 : contentHeight
        requestAnimationFrame(() => {
          wrapper.style.height = expanded ? contentHeight : 0
        })
      });
    }
  },
  methods: {
    onClick () {
      if (this.disabled) {
        return
      }
      const { parent } = this
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName
      const expanded = !this.expanded
      this.parent.switch(name, expanded, this.name)
    },
    onTransitionEnd () {
      if (!this.expanded) {
        this.show = false
      } else {
        this.$refs.wrapper.style.height = null
      }
    }
  },
  created () {
    this.findParent("sun-collapse")
    this.items.push(this)
    this.show = this.expanded
    this.inited = this.expanded
  }
}
</script>

<style lang="less">
.sun-collapse-item {
  position: relative;
  &::after {
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
    .sun-icon::before {
      transform: rotate(90deg);
      transition: 0.3s;
    }

    &::after {
      visibility: hidden;
    }
  }
  &-disabled {
    &,
    .sun-cell-title,
    & .sun-cell-right-icon {
      color: #c8c9cc;
    }
    &:active {
      background-color: white !important;
    }
  }
  &-expanded {
    .sun-cell-right-icon::before {
      transform: rotate(-90deg);
    }

    &::after {
      visibility: visible;
    }
  }
  &-wrapper {
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  &-content {
    color: #7d7e80;
    padding: 15px;
    font-size: 13px;
    line-height: 1.5;
    background-color: white;
  }
}
</style>