import { useState } from 'react'
import './App.css'
import Hero from "./components/sections/Hero.jsx"
import SortBar from "./components/layout/SortBar.jsx"
import Table from "./components/sections/Table.jsx"

function App() {
  return (
    <div className="font-inter bg-[#fbfbf0] text-[#2f2f2f] px-28">
      <Hero/>
      <SortBar/>
      <Table/>
      
    </div>
  )
}

export default App
