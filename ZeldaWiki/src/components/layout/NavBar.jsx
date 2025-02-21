import React from 'react'
import logo from '../../assets/Zelda_logo.png'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center border-b-1 border-[#EBEBEB]'>
            <a href="https://github.com/NguyenCatNguyen/React-display/tree/main/ZeldaWiki"
              className='flex items-center hover:text-blue-600 ease-in duration-400'>
              <img src={logo} alt="" className='w-10'/>
              <div className='font-bold'>ZeldaWiki</div>
            </a>
            <div className=''>
              <a href="#" className='highlight'>Search</a>
              <a href="#" className='highlight'>Favorite</a>
            </div>
    </div>
  )
}

export default NavBar