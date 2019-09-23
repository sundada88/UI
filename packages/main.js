import Vue from 'vue'
import Button from './button/button'
import Cell from './cell/cell'
import CellGroup from './cell-group/cell-group'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse-item/collapse-item'
import Icon from './icon/icon'
import Info from './info/info'
import Switch from './switch/switch'
import "./style/base.css"

const components = [
  Button,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Switch
]
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default install