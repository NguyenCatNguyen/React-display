import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className="">
      <div className="flex text-2xl justify-between ">
        <a className='flex' 
          href="https://github.com/NguyenCatNguyen/React-display/tree/main/ZeldaWiki">
          <div className='font-bold blue '>ZeldaWiki</div>
        </a>
        <div className="side-bar gold">
          <a className="mr-4 point" href="">Search</a>
          <a href="">Favorite</a>
        </div>
      </div>
        {/* <div className='flex '>
          <img src={hero} alt='Link image' className='h-fit'/>
          <h2 className='text-8xl font-bold text-left w-[600px]'>
            Find the <span className='underline decoration-blue-300'>detail</span> you looking for thought<span className='text-blue-300'> Zelda Wiki</span>
          </h2>
          
        </div> */}
    </div>
  )
}

export default Hero