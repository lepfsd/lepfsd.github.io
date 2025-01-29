

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>home</h1>
      <a href="/about">nosotros</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>about</h1>
      <a href="/">home</a>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

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
        
      </div>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element= {<HomePage/>} />
            <Route path='/about' element= {<AboutPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
