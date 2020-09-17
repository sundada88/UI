<template>
  <div class="sun-checkbox-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'sun-checkbox-group',

  props: {
    max: Number,
    value: Array,
    disabled: Boolean
  },

  watch: {
    value (val) {
      this.$emit('change', val);
    }
  }
};
</script>
