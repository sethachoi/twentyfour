// @flow

import Home from '../scenes/home'
import Second from '../scenes/second'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/second',
    component: Second,
    exact: true
  }
]

export default routes
