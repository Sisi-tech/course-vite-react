import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Count from './count.jsx'
import UseStateExample from './useStateExample.jsx'
import UseStateObject from './useState-object.jsx'
import UseCurrentState from './useCurrentState.jsx'
import FetchData from './fetch-data.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <hr />
    <Count />
    <hr />
    <UseStateExample />
    <hr />
    <UseStateObject />
    <hr />
    <UseCurrentState />
    <hr />
    <FetchData />
  </React.StrictMode>,
)
