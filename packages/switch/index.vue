<template>
  <div
    class="switch"
    @click="handleChange"
    :class="{'is-active': checked, 'is-notactive': !checked, 'disabled': disabled}"
  >
    <input
      :active-value="activeValue"
      :isactive-value="inactiveValue"
      type="checkbox"
      class="switch__input"
    >
    <span :style="[value ? textColor : '', {fontSize: '12px', fontWeight: 'bold', marginRight: '5px'}]">{{this.activeText}}</span>
    <span
      class="switch__core"
      ref="switchCore"
      :style="style"
    >
      <loading
        class="switch-loading"
        color='FFF'
        v-if="loading"
      />
    </span>
    <span :style="[!value ? textColor : '', {fontSize: '12px', fontWeight: 'bold', marginLeft: '5px'}]">{{this.inactiveText}}</span>
  </div>
</template>

<script>
import loading from '../loading'
export default {
  name: "sun-switch",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
      if (!this.disabled && !this.loading) {
        this.$emit("input", !this.value)
        this.$emit("change", !this.value)
      }
    }
  },
  components: {
    loading
  },
  computed: {
    checked () {
      return this.value;
    },
    textColor () {
      // if (this.value) {
      return {
        color: this.value ? this.activeColor || 'red' : this.inactiveColor || 'red'
      }
    },
    style () {
      return {
        backgroundColor: this.value ? this.activeColor : this.inactiveColor
      };
    },
    loadingStyle () {
      if (this.checked) {
        return {
          left: 0
        }
      } else {
        return {
          right: 0
        }
      }
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
.disabled {
  opacity: 0.3;
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
  content: "";
  position: absolute;
  left: 1px;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: #fff;
  transition: all 0.3s;
}
.switch-loading {
  transition: all 0.3s;
  z-index: 1;
  width: 50% !important;
  height: 50% !important;
  position: absolute;
}
// &-node {
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// .is-notactive.switch {
//   .sun-loading {
//     width: 10px;
//     height: 10px;
//     position: absolute;
//     z-index: 1;
//     left: 3px;
//   }
// }
.is-active.switch {
  .switch__core {
    background-color: red;
  }
  // .sun-loading {
  //   width: 10px;
  //   height: 10px;
  //   position: absolute;
  //   z-index: 1;
  //   right: 3px;
  // }
  .switch__core:after {
    left: calc(100% - 17px);
  }
}
.is-active .switch-loading {
  transform: translateX(20px);
}
</style>