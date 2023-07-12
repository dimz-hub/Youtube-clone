import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import {fetchFromApi} from '../utils/fetchFromApi'
import Videos from './Videos'

export default function Feed() {
const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])

useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
     .then((data) => {
      const response = data
      setVideos(response.data.items)
    })
  }, [selectedCategory])
  
 
     
  return (
    <div className='body'>
      <div className="sidebar border-r-[1px] border-[#3d3d3d]">
       <Sidebar className = 'h-[40vh]' selectedCategory= {selectedCategory} setSelectedCategory = {setSelectedCategory}/>
       <p className ='text-center font-bold'>Copyright 2022 Dimz Media</p>
      </div>
      <div className="main-body flex flex-col ">
        <div className="header px-3">
          <span className='font-bold text-2xl text-white'>{selectedCategory} </span>
          <span className='font-bold text-2xl text-[#fc1503]'> videos</span>
        </div>

         <Videos videos = {videos} /> 
      </div>
 

    </div>
  ) 
}
