import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

ReactDOM.render(<Router basename="/">{renderRoutes(routes)}</Router>, root)