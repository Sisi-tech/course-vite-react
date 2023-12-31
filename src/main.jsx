import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Count from './count.jsx'
import UseStateExample from './useStateExample.jsx'
import UseStateObject from './useState-object.jsx'
import UseCurrentState from './useCurrentState.jsx'
import FetchData from './fetch-data.jsx'
import MultipleReturns from './multiple-returns.jsx'
import ShortCircuitOverview from './truthyFalsy.jsx'
import ToggleBtn from './toggleBtn.jsx'
import ToggleChallenge from './toggleChallenge.jsx'
import CleanupFunc from './cleanup-func.jsx'
import ControlledInputs from './form.jsx'
import UserChallenge from './user-challenge.jsx'
import ShoppingList from './shopping-list.jsx'


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
    <hr />
    <MultipleReturns />
    <hr />
    <ShortCircuitOverview />
    <hr />
    < ToggleBtn />
    <hr />
    <ToggleChallenge />
    <hr />
    <CleanupFunc />
    <hr />
    <ControlledInputs />
    <hr />
    <UserChallenge />
    <hr />
    <ShoppingList />
    <hr />
  </React.StrictMode>,
)
