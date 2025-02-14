import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='flex justify-center py-10 '>
        <div className="Search-bar border-white border-2 py-4 px-7 w-2xl rounded-[10px] text-lg flex justify-between items-center">
        <input 
            type="text"
            placeholder="Search..."
            className='w-xl'
        />
        <button className='cursor-pointer hover:text-blue-300 hover:text-xl ease-in '>
        <FontAwesomeIcon icon={faSearch}/>
        </button>
        </div>
    </div>
  )
}

export default SearchBar