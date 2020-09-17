<template>
  <div class="box">
    <demo-section>
      <demo-block title="基础用法">
        <sun-cell-group>
          <sun-cell
            title="单元格"
            value="内容"
          />
          <sun-cell
            title="单元格"
            value="内容"
            label="描述信息"
          />
        </sun-cell-group>
      </demo-block>

      <demo-block title="展示图标">
        <sun-cell
          title="单元格"
          value="内容"
          icon="location-o"
        />
      </demo-block>

      <demo-block title="只设置 value">
        <sun-cell value="内容" />
      </demo-block>

      <demo-block title="展示箭头">
        <sun-cell
          title="单元格"
          is-link
        />
        <sun-cell
          title="单元格"
          is-link
          value="内容"
        />
        <sun-cell
          title="单元格"
          is-link
          arrow-direction="down"
          value="内容"
        />
      </demo-block>

      <demo-block title="页面跳转">
        <sun-cell
          title="单元格"
          is-link
          url="https://www.baidu.com"
        />
        <sun-cell
          title="单元格"
          is-link
          to="index"
        />
      </demo-block>

      <!-- <demo-block title="分组标题">
        <sun-cell-group title="分组">
          <sun-cell
            title="单元格"
            value="内容"
          />
        </sun-cell-group>
        <sun-cell-group title="分组2">
          <sun-cell
            title="单元格"
            value="内容"
          />
        </sun-cell-group>
      </demo-block> -->
      <demo-block title="高级用法">
        <sun-cell
          icon="shop-o"
          is-link
        >
          <span slot="title">单元格</span>
        </sun-cell>
        <sun-cell
          title="单元格"
          icon="shop-o"
          is-link
        />
        <sun-cell title="单元格">
          <sun-icon
            slot="right-icon"
            name="search"
            class="custom-icon"
          />
        </sun-cell>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面跳转'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router'
    }
  }
};
</script>

<style lang="less">
.box {
  height: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
