import React from 'react'
import logo from '../assets/Zelda_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = () => {
  return (
    <div className='w-60 h-80 rounded-[10px] bg-gray-900 text-white p-5 m-5'>
        <div>
            <img src={logo} alt="" />
            <h1 className='text-3xl'>Name</h1>
            <button><FontAwesomeIcon icon="heart"/></button>
        </div>

    </div>
  )
}

export default Card