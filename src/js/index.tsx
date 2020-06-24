// Materialize Imports
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'

// React Imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Custom CSS
import '../css/style.css'

// Components
import { App } from './app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
)

navigator.serviceWorker.register('/service-worker.js')