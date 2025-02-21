import React from 'react'
import Creature from '../../assets/Creatures.png'
import Equipment from '../../assets/Equipment.png'
import Material from '../../assets/Materials.png'
import Monster from '../../assets/Monsters.png'
import Treasure from '../../assets/Treasure.png'


const SortBar = () => {
  return (
    <div className=''>
      <div className='flex justify-center flex-wrap '>
        <img className='sort' src={Creature} alt="" />
        <img className='sort' src={Equipment} alt="" />
        <img className='sort' src={Material} alt="" />
        <img className='sort' src={Monster} alt="" />
        <img className='sort' src={Treasure} alt="" />
      </div>
    </div>
  )
}

export default SortBar