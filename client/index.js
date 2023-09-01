/* eslint-disable import/no-import-module-exports */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import 'Assets/custom.scss'
import App from 'Components/App'
import ErrorBoundary from 'Components/ErrorBoundary'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

const refresh = () => root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
)

refresh()

if (module.hot) {
  module.hot.accept()
}
