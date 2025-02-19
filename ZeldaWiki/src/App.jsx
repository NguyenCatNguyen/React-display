import { useState } from 'react'
import './App.css'
import Hero from "./components/sections/Hero.jsx"
import SortBar from "./components/layout/SortBar.jsx"

function App() {
  return (
    <div className="font-inter bg-black text-white">
      <Hero/>
      <SortBar/>
      
    </div>
  )
}

export default App
