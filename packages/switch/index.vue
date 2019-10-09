<template>
  <div
    class="switch"
    @click="handleChange"
    :class="{'is-active': checked}"
  >
    <input
      :active-value="activeValue"
      :isactive-value="inactiveValue"
      type="checkbox"
      class="switch__input"
    >
    <span :style="value ? textColor : ''">{{this.activeText}}</span>
    <span
      class="switch__core"
      ref="switchCore"
      :style="style"
    ></span>
    <span :style="!value ? textColor : ''">{{this.inactiveText}}</span>
  </div>
</template>

<script>
export default {
  name: "sun-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleChange () {
      this.$emit("input", !this.value);
    }
  },
  computed: {
    checked () {
      return this.value;
    },
    textColor () {
      return {
        color: this.value ? this.activeColor || 'red' : this.inactiveColor || 'red'
      }
    },
    style () {
      return {
        backgroundColor: this.value ? this.activeColor : this.inactiveColor
      };
    }
  }
};
</script>

<style lang='less' scoped>
.switch {
  display: inline-flex;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;
}
.switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
.switch__core {
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  margin: 0;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: 0;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #dcdfe6;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}
.switch__core:after {
  content: '';
  position: absolute;
  left: 1px;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: #fff;
  transition: all 0.3s;
}
.is-active.switch {
  .switch__core {
    background-color: red;
  }
  .switch__core:after {
    left: calc(100% - 17px);
  }
}
</style>