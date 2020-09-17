<template>
  <div
    :class="['sun-radio', {'sun-radio--disabled': isDisabled}]"
    @click="onClickLabel"
  >
    <span class="sun-radio__input">
      <input
        type="radio"
        v-model="currentValue"
        :disabled="isDisabled"
        :value="name"
        class="sun-radio__control"
      />
      <icon
        :style="iconStyle"
        :name="checked ? 'checked' : 'circle'"
      />
    </span>
    <span
      v-if="$slots.default"
      :class="['sun-radio__label', {'sun-radio__label--left': labelLeft}]"
      @click="onClickLabel"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import findParent from '../utils/mixins/find-parent'
import icon from '../icon'
  export default {
    name: 'sun-radio',
    mixins: [findParent],
    props: {
      disabled: Boolean,
      value: String,
      labelLeft: Boolean,
      name: String,
      checkedColor: String,
      labelDisabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentValue: {
        get () {
          return this.parent ? this.parent.value : this.value
        },
        set (val) {
          (this.parent || this).$emit('input', val)
        }
      },
      isDisabled() {
        return this.parent ? this.parent.disabled || this.disabled : this.disabled
      },
      checked () {
        return this.currentValue === this.name
      },
      iconStyle () {
        const {checkedColor} = this
        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            color: checkedColor
          }
        }
      }
    },
    created () {
      this.findParent('sun-radio-group')
    },
    components: {
      icon
    },
    methods: {
      onClickLabel () {
        if (!this.isDisabled && !this.labelDisabled) {
          this.currentValue = this.name
        }
      }
    }
  }
</script>

<style lang="less" >
@import "../style/var";
.sun-radio {
  overflow: hidden;
  user-select: none;
  &__input,
  &__label {
    color: @black;
    display: inline-block;
    vertical-align: middle;
  }

  &__input {
    height: 1em;
    position: relative;
    font-size: @radio-size;
  }

  &__control {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  &__label {
    line-height: @radio-size;
    margin-left: 10px;

    &--left {
      float: left;
      margin: 0 10px 0 0;
    }
  }

  .sun-icon {
    width: 1em;
    pointer-events: none;
  }

  .sun-icon-checked {
    color: @blue;
  }

  .sun-icon-check {
    color: @gray-dark;
  }

  &--disabled {
    /deep/ .sun-icon {
      color: @gray-light;
      border-radius: 100%;
      background-color: @background-color;
    }
  }
}
</style>