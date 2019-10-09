import Vue from 'vue'
import Button from './button'
import Cell from './cell'
import CellGroup from './cell-group'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Icon from './icon'
import Info from './info'
import Progress from './progress'
import Slider from './slider'
import Switch from './switch'
import "./style/base.css"

const components = [
  Button,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Progress,
  Slider,
  Switch
]
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default install