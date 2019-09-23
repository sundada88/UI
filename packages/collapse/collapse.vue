<template>
  <div class="sun-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sun-collapse",
  props: {
    accordion: Boolean, // 手风琴模式
    value: [String, Number, Array]
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    switch (name, expanded, whichOne) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name)
      }
      this.$emit('change', name)
      this.$emit('click', whichOne)
      this.$emit('input', name)
    }
  }
}
</script>

<style lang="less" scoped>
</style>