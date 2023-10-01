import './App.css'

function App() {
  return (
    <div>
      <h1>Advanced React</h1>
      <h2>Create a React app:</h2>
      <p>npm create vite@latest app-name -- --template react</p>
      <h2>Run app:</h2>
      <p>npm install && npm run dev</p>
      <hr/>
      <h2>General Hooks</h2>
      <ul>
        <li>start with "use" (both -react and custom hooks)</li>
        <li>component must be uppercase</li>
        <li>invoke inside function/component body</li>
        <li>don't call hooks conditionally</li>
        <li>set functions don't update state immediately</li>
      </ul>
    </div>
  )
}

export default App
