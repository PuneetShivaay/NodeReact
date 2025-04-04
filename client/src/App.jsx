import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
    setArray(response.data.fruits);
  };

  useEffect(() => {
    fetchApi();
  }, []) // empty array so only it runs only once

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {
          array.map((fruit, index) => (
            <div key={index}>
                <p>{fruit}</p>
                <br></br>
            </div>
          ))
        }
      </p>
    </>
  )
}

export default App
