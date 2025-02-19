import React from 'react'
import Creature from '../../assets/Creatures.png'
import Equipment from '../../assets/Equipment.png'
import Material from '../../assets/Materials.png'
import Monster from '../../assets/Monsters.png'
import Treasure from '../../assets/Treasure.png'


const SortBar = () => {
  return (
    <div>
      <div className='flex w-1/3 justify-between'>
        <img src={Creature} alt="" />
        <img src={Equipment} alt="" />
        <img src={Material} alt="" />
        <img src={Monster} alt="" />
        <img src={Treasure} alt="" />
      </div>
    </div>
  )
}

export default SortBar