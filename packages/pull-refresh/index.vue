<template>
  <div class="sun-pull-refresh">
    <div
      class="sun-pull-refresh__track"
      :style="style"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div
        class="sun-pull-refresh__head"
        :style="headStyle"
      >
        <slot :name="status">
          <div
            v-if="status === 'pulling' || status === 'loosing'"
            :style="textStyle"
            v-text="text"
            class="sun-pull-refresh__text"
          />
          <div
            v-if="status === 'loading'"
            class="sun-pull-refresh__loading"
          >
            <loading />
            <span v-text="text" />
          </div>
        </slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Touch from '../utils/mixins/touch'
import scrollUtils from '../utils/scroll'
import loading from '../loading'
export default {
  name:'sun-pull-refresh',
  mixins: [Touch],
  components: {
    loading
  },
  props: {
    disabled: Boolean,
    pullingText: String,
    loosingText:String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default:300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      status: 'normal',
      height: 0,
      duration: 0,
      pulling: "下拉即可刷新...",
      loosing: "释放即可刷新...",
      loading: "加载中..."
    }
  },
  computed: {
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.height}px ,0)`
      }
    },
    headStyle () {
      return {
        height: `${this.headHeight}px`,
        lineHeight:`${this.headHeight}px`,
        top: `-${this.headHeight}px` 
      }
    },
    untouchable() {
      return this.status === 'loading' || this.disabled
    },
    text() {
      return this[`${this.status}Text`] || this[this.status]
    }
  },
  watch: {
    value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },

  mounted() {
    this.scrollEl = scrollUtils.getScrollEventTarget(this.$el);
  },
  methods: {
    onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove(event) {
      if (this.untouchable) {
        return;
      }
      this.touchMove(event);
      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }
      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.cancelable && event.preventDefault();
        }
      }
    },
    onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },

    getCeiling() {
      this.ceiling = scrollUtils.getScrollTop(this.scrollEl) === 0;
      console.log(this.ceiling)
      return this.ceiling;
    },

    ease(height) {
      const { headHeight } = this;
      return height < headHeight
        ? height
        : height < headHeight * 2
          ? Math.round(headHeight + (height - headHeight) / 2)
          : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },

    getStatus(height, isLoading) {
      this.height = height;

      const status = isLoading
        ? 'loading' : height === 0
          ? 'normal' : height < this.headHeight
            ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../style/var";

.sun-pull-refresh {
  user-select: none;
  overflow: hidden;

  &__track {
    position: relative;
  }

  &__head {
    width: 100%;
    // height: 50px;
    left: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    // top: -50px;
    font-size: 14px;
    color: @gray-dark;
    // line-height: 50px;
  }
  &__text {
    text-align: center;
  }

  &__loading {
    .sun-loading {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    span,
    .sun-loading {
      vertical-align: middle;
      display: inline-block;
    }
  }
}
</style>