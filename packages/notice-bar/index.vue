<template>
  <div
    :class="['sun-notice-bar', {
    'sun-notice-bar--withicon': mode
  }]"
    :style="barStyle"
    v-show="showNoticeBar"
    @click="$emit('click')"
  >
    <icon
      v-if="leftIcon"
      class="sun-notice-bar__left-icon"
      :name="leftIcon"
    ></icon>
    <div
      class="sun-notice-bar__wrap"
      ref="wrap"
    >
      <div
        :class="['sun-notice-bar__content', animationClass, {
          'sun-ellipsis': !scrollable
        }]"
        ref="content"
        :style="contentStyle"
        @animationend="onAnimationEnd"
        @webkitAnimationend="onAnimationEnd"
      >
        <slot>{{text}}</slot>
      </div>
    </div>
    <icon
      v-if="iconName"
      class="sun-notice-bar__right-icon"
      :name="iconName"
      @click="handleClick"
    />
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'sun-notice-bar',
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    Icon
  },
  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    }
  },
  computed: {
    iconName() {
      return this.mode === 'closeable' ? 'cross' : this.mode === 'link' ? 'arrow' : ''
    },
    barStyle() {
      return {
        background: this.background,
        color: this.color
      }
    },
    contentStyle () {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },
  watch: {
    text: {
      immediate: true,
      handler () {
        console.log(12346)
        this.$nextTick(() => {
          const {wrap, content} = this.$refs
          if (!wrap || !content) {
            return
          }
          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
            this.animationClass = 'sun-notice-bar__play'
          }
        })
      }
    }
  },
  methods: {
    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = 'sun-notice-bar__play--infinite';
      })
    },
    handleClick() {
      this.showNoticeBar = this.mode !== 'closeable'
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/var.less";
.sun-notice-bar {
  display: flex;
  height: 40px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  align-items: center;
  color: @orange-dark;
  background-color: @orange-light;
  &--withicon {
    padding-right: 40px;
  }
  &__left-icon {
    font-size: 16px;
    min-width: 20px;
  }
  &__right-icon {
    top: 50%;
    right: 15px;
    font-size: 16px;
    position: absolute;
    margin-top: -0.5em;
  }
  &__wrap {
    flex: 1;
    height: 24px;
    overflow: hidden;
    position: relative;
  }
  &__content {
    position: absolute;
    white-space: nowrap;
    &.sun-ellipsis {
      max-width: 100%;
    }
  }
  &__play {
    animation: sun-notice-bar-play linear both;
  }

  &__play--infinite {
    animation: sun-notice-bar-play-infinite linear infinite both;
  }
}
@keyframes sun-notice-bar-play {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes sun-notice-bar-play-infinite {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>