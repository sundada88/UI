<template>
  <div class="content">
    <h2 class="title">基于 Vue 的移动组件库</h2>
    <div
      v-for="(nav, index) in navConfig"
      :key="index"
    >
      <sun-collapse v-model='activeName'>
        <div
          class="content-item"
          v-for="(group, index) in nav.groups"
          :key="index"
          v-if="group.groupName"
        >
          <sun-collapse-item>
            <div
              class="item"
              slot="title"
            >
              <h3>{{group.groupName}}</h3>
            </div>
            <div
              v-for="(list, index) in group"
              :key="index"
            >
              <div
                v-for="(item, index) in list"
                :key="index"
              >
                <sun-cell
                  v-if="item.title"
                  :title="item.title"
                  isLink
                  :to="item.path"
                >

                </sun-cell>
              </div>
            </div>

          </sun-collapse-item>
        </div>
      </sun-collapse>
    </div>
  </div>
</template>

<script>

import navConfig from "../../doc/docs.config"
export default {
  data () {
    return {
      activeName: []
    }
  },
  computed: {
    navConfig () {
      return navConfig.nav
    }
  }
}
</script>

<style lang="less">
.content {
  padding: 64px 20px 20px;
  .title {
    text-align: center;
    margin: 0 0 20px;
  }
  &-item {
    padding-bottom: 20px;
    h3 {
      margin-bottom: 0;
    }
    .item {
      padding: 10px;
    }
  }
}
</style>
