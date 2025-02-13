import React from 'react'
import logo from '../assets/Zelda_logo.png'
import sword from '../assets/sword.png'

const Hero = () => {
  return (
    <div className="">
      <div className='flex justify-left px-7 pt-4 items-center h-12'>
        <img src={logo} alt="Zelda Logo" className='w-10 h-10' />
        <div className='font-bold text-white text-2xl'>ZeldaWiki</div>
      </div>
        <div className='flex'>
          <h2 className='text-8xl font-bold text-left p-8 text-white w-[600px]'>
            Find the <span className='underline decoration-blue-300'>detail</span> you looking for thought<span className='text-blue-500'> Zelda Wiki</span>
          </h2>
          
        </div>
    </div>
  )
}

export default Hero