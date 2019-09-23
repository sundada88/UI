## switch

### Install

```javascript
switchswitchswitchswitchswitchswitchswitch
```

### Usage

#### Basic Usage

Use `active-key` prop to set index of chosen 'badge'

```html
<bos-badge-group :active-key="activeKey" @change="onChange">
  <bos-badge title="Title" />
  <bos-badge title="Title" info="8" />
  <bos-badge title="Title" info="99" />
  <bos-badge title="Title" info="99+" />
</bos-badge-group>
```

```javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
```
