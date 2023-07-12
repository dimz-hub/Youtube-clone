import React from 'react'
import { categories } from '../utils/constant'

export default function Sidebar({selectedCategory, setSelectedCategory}) {


const newStyle = {
    backgroundColor: '#fc1503',
   
   
}



  return (
    <div className=" flex sm:flex-row md:flex-col "
    
    >
        {categories.map((category) => {
            return (
                <button onClick = {() => setSelectedCategory(category.name)} className='flex gap-2 p-2 hover:bg-red-900 rounded-[20px] hover:text-black '
                style={selectedCategory === category.name? newStyle : null}
                >
                <span >{category.icon}</span>
                <span>{category.name}</span>
                </button>
            )
        })}
    </div>
  )
}

