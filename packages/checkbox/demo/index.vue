<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <sun-checkbox v-model="checkbox1">{{ $t('checkbox') }}</sun-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <sun-checkbox
        :value="false"
        disabled
        shape='square'
      >
        {{ $t('checkbox') }}
      </sun-checkbox>
      <sun-checkbox
        :value="true"
        disabled
      >
        {{ $t('checkbox') }}
      </sun-checkbox>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <sun-checkbox
        v-model="checkbox2"
        checked-color="#4b0"
      >
        {{ $t('customColor') }}
      </sun-checkbox>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <sun-checkbox v-model="checkbox3">
        {{ $t('customIcon') }}
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        >
      </sun-checkbox>
    </demo-block>

    <demo-block :title="$t('title3')">
      <sun-checkbox-group v-model="result">
        <sun-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </sun-checkbox>
      </sun-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <sun-checkbox-group
        v-model="result2"
        :max="2"
      >
        <sun-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </sun-checkbox>
      </sun-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title5')">
      <sun-checkbox-group v-model="result3">
        <sun-cell-group>
          <sun-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="$t('checkbox') + item"
            @click="toggle(index)"
          >
            <sun-checkbox
              ref="checkboxes"
              :name="item"
            />
          </sun-cell>
        </sun-cell-group>
      </sun-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      basicUsage: '基础用法',
      disabled: '禁用状态',
      checkbox: '复选框',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      title3: '复选框组',
      title4: '设置最大可选数',
      title5: '搭配单元格组件使用'
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell'
    }
  },

  data () {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      icon: {
        normal: 'docs/assets/img/logo1.png',
        active: 'docs/assets/img/logo.png'
      }
    };
  },

  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style lang="less">
.sun-doc-demo-block {
  .sun-checkbox {
    margin: 10px 0 0 20px;
  }

  .sun-cell {
    .sun-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }
}
</style>
