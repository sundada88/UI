import Vue from 'vue'
import Button from './button'
import Cell from './cell'
import CellGroup from './cell-group'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Icon from './icon'
import Info from './info'
import Loading from './loading'
import Progress from './progress'
import Popup from './popup'
import Pullrefresh from './pull-refresh'
import Radio from './radio'
import RadioGroup from './radio-group'
import Row from './row'
import Slider from './slider'
import Switch from './switch'
import "./style/base.css"

const components = [
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Loading,
  Popup,
  Progress,
  Pullrefresh,
  Radio,
  RadioGroup,
  Row,
  Slider,
  Switch
]
const install = Vue => {
  console.log(components)
  components.forEach(component => {
    if (!component.name) {
      console.log(component)
      return
    }
    Vue.component(component.name, component)
  })
}
export default install