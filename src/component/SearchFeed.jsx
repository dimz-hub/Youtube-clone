import React, {useEffect, useState} from 'react'
import {fetchFromApi} from '../utils/fetchFromApi'
import Videos from './Videos'
import {useParams} from 'react-router-dom'

export default function Feed() {
const {searchTerm }= useParams()
const [videos, setVideos] = useState([])


useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${searchTerm}`)
     .then((data) => {
      const response = data
      setVideos(response.data.items)
     })
}, [searchTerm])

       
  return (
    
      <div className="main-body flex flex-col">
        <div className="header px-3">
          <span className='text-2xl'>
          Results for:
          <span className='font-bold text-2xl text-[#fc1503]'> {searchTerm}  </span>
          <span className='font-bold text-2xl text-[#fc1503]'> videos</span>
        </span>
        </div>

        <Videos videos = {videos}/>
      </div>
 

  
  ) 
}
