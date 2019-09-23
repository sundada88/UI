<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-collapse v-model="activeNames">
          <sun-collapse-item
            title="sunui"
            name="1"
          >
            基于 Vue 开发的组件库。
          </sun-collapse-item>
          <sun-collapse-item
            title="sunui"
            name="2"
          >
            帮助开发者快速开发。
          </sun-collapse-item>
          <sun-collapse-item
            title="sun-ui"
            name="3"
            disabled
          >
            帮助开发者快速的开发。
          </sun-collapse-item>
        </sun-collapse>
      </demo-block>
      <demo-block title="手风琴">
        <sun-collapse
          v-model="activeName"
          accordion
        >
          <sun-collapse-item
            title="sunui"
            name="1"
          >
            基于 Vue 开发的组件库。
          </sun-collapse-item>
          <sun-collapse-item
            title="sunui"
            name="2"
          >
            帮助开发者快速开发。
          </sun-collapse-item>
          <sun-collapse-item
            title="sun-ui"
            name="3"
          >
            帮助开发者快速的开发。
          </sun-collapse-item>
        </sun-collapse>
      </demo-block>

      <demo-block title="自定义标题内容">
        <sun-collapse
          border
          v-model="activeNames"
          @change="handleChange"
          @click="hanleClick"
        >
          <sun-collapse-item name="1">
            <div slot="title">sunui
              <sun-icon name="question-o" />
            </div>
            轻量、可靠的移动端 Vue 组件库，帮助开发者快速的开发。
          </sun-collapse-item>
          <sun-collapse-item
            title="sunui"
            name="2"
            icon="shop-o"
          >
            帮助开发者快速的开发。
          </sun-collapse-item>
        </sun-collapse>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1', '2'],
      activeName: '1'
    };
  },
  methods: {
    handleChange (name) {
      console.log(name)
    },
    hanleClick (name) {
      console.log(name)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 320px;
  height: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>