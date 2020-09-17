<template>
  <div class="sun-checkbox">
    <div
      :class="['sun-checkbox__icon', `sun-checkbox__icon--${shape}`, {'sun-checkbox__icon--checked': checked, 'sun-checkbox__icon--disabled': disabled}]"
      @click.stop="toggle"
    >
      <slot
        name="icon"
        :checked="checked"
      >
        <sun-icon
          name="success"
          :style="iconStyle"
        />
      </slot>
    </div>
    <span
      v-if="$slots.default"
      :class="['sun-checkbox__label', `sun-checkbox--${labelPosition}`, {'sun-checkbox--disabled': isDisabled}]"
      @click="toggle('label')"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import findParent from 'packages/utils/mixins/find-parent.js'
export default {
  name: 'sun-checkbox',
  mixins: [findParent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get () {
        return this.parent
          ? this.parent.value.indexOf(this.name) !== -1
          : this.value;
      },

      set (val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled () {
      return (this.parent && this.parent.disabled) || this.disabled;
    },

    iconStyle () {
      const { checkedColor } = this;
      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    }
  },
  watch: {
    value (val) {
      this.$emit('change', val);
    }
  },

  created () {
    this.findParent('sun-checkbox-group');
  },

  methods: {
    toggle (target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    },

    setParentValue (val) {
      const { parent } = this;
      const value = parent.value.slice();
      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */
        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        const index = value.indexOf(this.name);

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style/var";
.sun-checkbox {
  overflow: hidden;
  user-select: none;
  &__icon,
  &__label {
    display: inline-block;
    vertical-align: middle;
    line-height: @checkbox-size;
  }
  &__icon {
    height: @checkbox-size;

    .sun-icon {
      font-size: 14px;
      color: transparent;
      text-align: center;
      line-height: inherit;
      width: @checkbox-size;
      height: @checkbox-size;
      box-sizing: border-box;
      border: 1px solid @checkbox-border-color;
      transition: @checkbox-transition-duration;
    }

    &--round {
      .sun-icon {
        border-radius: 100%;
      }
    }

    &--checked {
      .sun-icon {
        color: @white;
        border-color: @checkbox-checked-icon-color;
        background-color: @checkbox-checked-icon-color;
      }
    }

    &--disabled {
      .sun-icon {
        border-color: @checkbox-disabled-icon-color;
        background-color: @checkbox-disabled-background-color;
      }
    }

    &--disabled&--checked {
      .sun-icon {
        color: @checkbox-disabled-icon-color;
      }
    }
  }

  &__label {
    color: @checkbox-label-color;
    margin-left: @checkbox-label-margin;

    &--left {
      float: left;
      margin: 0 @checkbox-label-margin 0 0;
    }

    &--disabled {
      color: @checkbox-disabled-label-color;
    }
  }
}
</style>