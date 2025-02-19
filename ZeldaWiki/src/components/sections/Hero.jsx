import React from 'react';
import NavBar from '../layout/NavBar';

const Hero = () => {
  return (
    <div className="h-screen py-10 px-24">
      <NavBar/>
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