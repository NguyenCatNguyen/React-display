import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className="">
      <div className="flex text-2xl justify-between ">
        <a className='flex' 
          href="https://github.com/NguyenCatNguyen/React-display/tree/main/ZeldaWiki">
          <div className='font-bold blue border '>ZeldaWiki</div>
        </a>
        <div className="side-bar gold">
          <a href="" className="border mr-2 ">Search</a>
          <a href="" className="border">Favorite</a>
        </div>
      </div>

        <div className='flex mt-5 '>
          <h2 className='text-8xl font-bold text-left'>
            Find the <span className='underline decoration-blue-300'>detail</span> you looking for thought<span className='text-blue-300'> Zelda Wiki</span>
          </h2>
          <img src={hero} alt='Link image' className='rounded-xl w-sm'/>
          
        </div>
    </div>
  )
}

export default Hero