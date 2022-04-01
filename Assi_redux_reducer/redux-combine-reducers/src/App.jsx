import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HomePage } from "./components/elements/Home";
import { Routers } from "./components/elements/Routes";

function App() {

  return (
    <div className="App">
      <Routers></Routers>
    </div>
  )
}

export default App
