import React from 'react'
import logo from '../assets/Zelda_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = () => {
  return (
    <div className='w-[250px] h-87 rounded-[10px] bg-gray-900 p-4 m-4 relative cursor-pointer border-2 border-gray-900 hover:border-white hover:translate-y-[-10px] ease-in duration-300'>
        <div>
            <img src={logo} alt="" className='bg-white w-[218px] h-[218px] rounded-lg' />
            <h1 className='pt-2'>ID Num</h1>
            <h1 className='text-3xl font-bold'>Name dai vl shdk</h1>
        </div>

    </div>
  )
}

export default Card