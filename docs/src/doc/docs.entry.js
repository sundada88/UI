export default {
  'intro': () => import('../../markdown/intro.md'),
  'quickstart': () => import('../../markdown/quickstart.md'),
  'button': () => import('packages/button/index.md'),
  'cell': () => import('packages/cell/index.md'),
  'collapse': () => import('packages/collapse/index.md'),
  'progress': () => import('packages/progress/index.md'),
  'slider': () => import('packages/slider/index.md'),
  'switch': () => import('packages/switch/index.md')
}