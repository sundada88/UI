<template>
  <div class="sun-progress">
    <span
      :class="['sun-progress-portion', {'sun-progress-with-pivot': showPivot && text}]"
      :style="portionStyle"
    >
      <span
        v-if="showPivot && text"
        v-text="text"
        ref="pivot"
        :style="pivotStyle"
        class='sun-progress-pivot'
      />
    </span>
  </div>
</template>

<script>
import { isDef } from 'packages/utils'
export default {
  name: 'sun-progress',
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#1989fa'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
      pivotWidth: 0,
      progressWidth: 0
    }
  },
  computed: {
    text () {
      return isDef(this.pivotText) ? this.pivotText : this.percentage + '%'
    },
    currentColor () {
      return this.inactive ? '#cacaca' : this.color;
    },
    portionStyle () {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      };
    },
    pivotStyle () {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      };
    }
  },
  mounted () {
    this.getWidth()
  },
  watch: {
    showPivot () {
      this.getWidth();
    },

    pivotText () {
      this.getWidth();
    }
  },
  methods: {
    getWidth () {
      this.progressWidth = this.$el.offsetWidth
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0
    }
  }
}
</script>

<style lang="less" scoped>
.sun-progress {
  height: 4px;
  background: #e5e5e5;
  border-radius: 2px;
  position: relative;
  &-portion {
    position: absolute;
    left: 0;
    height: 100%;
    border-radius: inherit;
  }
  &-with-pivot {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &-pivot {
    position: absolute;
    top: 50%;
    right: 0;
    min-width: 2em;
    line-height: 1.6;
    text-align: center;
    border-radius: 1em;
    padding: 0 5px;
    font-size: 10px;
    background-color: #e5e5e5;
    transform: translate(100%, -50%);
  }
}
</style>