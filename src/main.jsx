import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Count from './count.jsx'
import UseStateExample from './useStateExample.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <hr />
    <Count />
    <hr />
    <UseStateExample />
  </React.StrictMode>,
)
