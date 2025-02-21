import React from 'react'
import logo from '../../assets/hero.png'

const Card = ({name}) => {
  return (
    <div className=''>
        <div className='w-70  mx-2 my-4 rounded-lg p-4 shadow-md shadow-black/50 border-[0.5px] border-black/20
                        hover:-translate-y-3 transition-transform hover:shadow-blue-300 duration-300 hover:border-blue-300
        '>
            <div className='size-62'>
              <img src={logo} alt="" className='w-full h-full object-cover rounded-lg' />
            </div>
            <h1 className='p-2 font-bold rounded-lg my-2 bg-[#2f2f2f] text-[#fbfbf0] w-15 text-center'>ID</h1>
            <h1 className='text-3xl font-bold'>{name}test name</h1>
        </div>

    </div>
  )
}

export default Card