import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero.jsx"
import SearchBar from './components/SearchBar.jsx'
import Table from './components/Table.jsx'

function App() {
  return (
    <div className="font-inter py-10 px-25 bg-black text-white">
      <Hero/>
      {/* <SearchBar/> */}
      <Table/>
    </div>
  )
}

export default App
