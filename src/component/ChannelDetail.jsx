import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {fetchFromApi} from '../utils/fetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { Box } from '@mui/material'

export default function ChannelDetails() {

const {id} =  useParams()
const [ChannelDetails, setChannelDetails] = useState({})
const [videos, setVideos] = useState([])

useEffect(() => {
  fetchFromApi(`channels?part=snippet&id=${id}`)
  .then((data) => {
    setChannelDetails(data.data.items[0])})
  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
  .then((data) => {
    setVideos(data.data.items)
  })
}, [id])




  return (
    <div className = 'channel-details overflow-scroll h-[88vh]  '>
<div className='flex flex-col items-center'>

<div className='channel-color' />
<div className='mt-[-60px]'>

<ChannelCard  id={ChannelDetails.id} snippet={ChannelDetails.snippet} stat = {ChannelDetails.statistics}/>
</div>
</div>



<Videos videos = {videos}/>




    </div>
  )
}
