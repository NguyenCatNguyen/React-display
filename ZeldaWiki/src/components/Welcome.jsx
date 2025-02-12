import React from 'react'
import '../index.css'

const Welcome = () => {
  return (
    <div className="">
        <div className='font-bold p-4 text-white'>ZeldaWiki</div>
        <img src="../assets/Zelda_logo.png" alt="" />
        <h2 className='font-bold italic text-4xl text-center mt-10 text-white'>
            Find the <span className='underline decoration-blue-300'>detail</span> you looking for throught <span className='text-blue-600'>Zelda Wiki</span></h2>
    </div>
  )
}

export default Welcome