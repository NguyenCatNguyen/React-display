import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero.jsx"
import SearchBar from './components/SearchBar.jsx'

function App() {
  return (
    <div className="hero bg-black px-15 py-5 text-white ">
      <Hero/>
      {/* <SearchBar/> */}
    </div>
  )
}

export default App
