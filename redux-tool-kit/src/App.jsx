
import './App.css'
import Todos from './Components/Todos'
import React from 'react';


function App() {

  return (
  <div className="flex  flex-col items-center justify-center  bg-gray-50">
    <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Learn about Redux Tool Kit</h1>

    <Todos/>
  </div>
  )
}

export default App
