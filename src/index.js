import React from 'react'
import ReactDOM from 'react-dom'
import { DataProvider } from './context/data-context'
import App from './App'

import './assets/css/index.css'

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
)
