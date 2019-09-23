import docsConfigs from './doc/docs.config'
import docsEntry from './doc/docs.entry'
import appEntry from './app/app.entry'
import "./assets/js/iframe-router"
const routes = [{
  path: '*',
  redirect: () => "/intro"
}]
const {
  nav
} = docsConfigs
const registerRouter = ({
  mobile
}) => {
  nav.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(page => {
          if (mobile) {
            routes.push({
              path: page.path,
              name: page.path,
              component: appEntry[page.path.replace('/', '')] ? appEntry[page.path.replace('/', '')] : appEntry.button,
              meta: {
                name: page.path !== '/intro' && page.path !== '/quickstart' ? page.title : ''
              }
            })
          } else {
            routes.push({
              path: page.path,
              name: page.path,
              component: docsEntry[page.path.replace('/', '')] ? docsEntry[page.path.replace('/', '')] : docsEntry.button,
              meta: {
                name: page.title
              }
            })
          }
        })
      })
    }
  })
  window.console.log(routes)
  return routes
}

export default registerRouter