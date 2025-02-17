import React from 'react';
import logo from '../assets/Zelda_logo.png'

const Hero = () => {
  return (
    <div className="h-screen">
      <div className='flex justify-between items-center border-b-1 border-[#EBEBEB]'>
        <a href="https://github.com/NguyenCatNguyen/React-display/tree/main/ZeldaWiki"
          className='flex items-center'>
          <img src={logo} alt="" className='w-10'/>
          <div className='font-bold hover:text-blue-300 ease-in duration-300'>ZeldaWiki</div>
        </a>
        <div className=''>
          <a href="#" className='highlight'>Search</a>
          <a href="#" className='highlight'>Favorite</a>
        </div>
      </div>
      {/* <hr className='border-t-[0.5] border-white opacity-50'/> */}
      <div className='w-4/5'> 
        <h1 className='text-7xl font-bold py-5'>
          Zelda Wiki: Your Portal to Hyrule
        </h1>
        <p class="w-3/4">
          Looking for something specific? You've come to the right place. All the compendium 
          you seek, in one convenient location. Start exploring by browsing categories or searching for a specific 
          entry by name or ID.</p>
      </div>
    </div>
  );
}

export default Hero;