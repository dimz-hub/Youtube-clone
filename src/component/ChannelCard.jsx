import React from 'react'
import { Card, CardContent, CardMedia, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import {demoChannelUrl, demoThumbnailUrl, demoVideoUrl, demoChannelTitle,demoVideoTitle} from '../utils/constant'
export default function ChannelCard({id, snippet, stat}) {


  return (
  <Box className=' box w-[358px] md:w-[320px] flex flex-col  justify-center items-center'>
<Link to = {`/channel/${id?.channelId}`} className='p-3'>
    <CardMedia image={snippet?.thumbnails?.high?.url} alt = {demoThumbnailUrl} className=' channel-image  h-[120px] w-[120px] rounded-[50%]'/>
</Link> 
<CardContent className=' h-[170px] w-[100%] flex flex-col items-center justify-center'>
<div className='text-md flex gap-[0.2rem] mt-[-60px] '>
<h5 className='text-xl'> {snippet?.title ||demoChannelTitle }</h5>
<CheckCircle  />

</div>
  
{
  stat?.subscriberCount && (

<h3>
 { parseInt(stat.subscriberCount).toLocaleString()} Subcribers
</h3>
)}



</CardContent>



  </Box>
  )
}
