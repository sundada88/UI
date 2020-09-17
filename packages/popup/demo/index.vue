<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-button
          type="default"
          @click="handleClick"
        >弹出popup</sun-button>
        <sun-popup v-model="open">
          <div class="content">弹出popup</div>
        </sun-popup>
      </demo-block>
      <demo-block title="弹出位置">
        <sun-button
          type="default"
          @click="handleClickTop"
        >顶部弹出</sun-button>
        <sun-popup
          :overlay="false"
          v-model="top"
          position='top'
        >
          <div>内容</div>
        </sun-popup>
        <sun-button
          type="default"
          @click="handleClickBottom"
        >底部弹出</sun-button>
        <sun-popup
          v-model="bottom"
          position='bottom'
        >
          <div>内容</div>
        </sun-popup>
        <sun-button
          type="default"
          @click="handleClickRight"
        >右侧弹出</sun-button>
        <sun-popup
          v-model="right"
          position='right'
        >
          <div>
            <sun-button @click="closeRight">
              关闭popup
            </sun-button>
          </div>
        </sun-popup>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      top: false,
      right: false,
      bottom: false
    }
  },
  methods: {
    handleClick () {
      this.open = !this.open
    },
    handleClickTop () {
      this.top = !this.top
      setTimeout(() => {
        this.top = false
      }, 2500)
    },
    handleClickBottom () {
      this.bottom = true
    },
    handleClickRight () {
      this.right = true
    },
    closeRight () {
      this.right = false
    }
  }
}
</script>

<style lang="less">
.sun-doc-demo-block {
  .sun-popup {
    .content {
      padding: 10px;
    }
    &-top {
      color: white;
      width: 100%;
      border-radius: 0;
      line-height: 20px;
      padding: 20px 10px;
      background-color: rgba(0, 0, 0, 0.8);
      div {
        padding: 0 0 0 20px;
      }
    }
    &-bottom {
      div {
        height: 150px;
        padding: 0 0 0 20px;
      }
    }
    &-right {
      div {
        box-sizing: border-box;
        // margin: 20px;
        border: 20px transparent solid;
        height: 100vh;
        width: 100vw;
        background: white;
      }
    }
  }
}
</style>
