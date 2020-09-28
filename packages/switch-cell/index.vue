<template>
  <cell
    class="sun-switch-cell"
    :title="title"
    :border="border"
  >
    <sunSwitch
      v-bind="$props"
      @click="$emit('input', $event)"
    ></sunSwitch>
  </cell>
</template>

<script>
import cell from '../cell';
import sunSwitch from '../switch';
  export default {
    name: 'sun-switch-cell',
    props: {
      value: Boolean,
      title: {
        type:String,
        default:''
      },
      border: Boolean,
      disabled: Boolean,
      loading: Boolean,
      activeColor: String,
      inactiveColor: String,
      size: {
        type: String,
        default: '24px'
      }
    },
    components: {
      cell,
      sunSwitch 
    },
    watch: {
      value () {
        this.$emit('change', this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../../assets/less/var.less";
.sun-switch-cell {
  padding-top: @switch-cell-padding-top;
  padding-bottom: @switch-cell-padding-bottom;

  .switch {
    float: right;
  }
}
</style>