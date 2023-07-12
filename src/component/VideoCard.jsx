import React from 'react'
import {Link} from 'react-router-dom'
import {demoChannelUrl, demoThumbnailUrl, demoVideoUrl, demoChannelTitle,demoVideoTitle} from '../utils/constant'
import { Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'



export default function VideoCard( {id:{videoId}, snippet}) {
  return (

    <Card className='card w-[358px] md:w-[250px] shadow-none'> 
     <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
     <CardMedia image={snippet?.thumbnails?.high?.url} alt={demoThumbnailUrl}  className='h-[180px] w-[358px]'/>
     
     </Link>

     <CardContent className='bg-[#1e1e1e] text-white h-[170px]'>
      <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
      <h3>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</h3>
      
      </Link >
      <Link to={snippet?.channelId? `video/${snippet?.channelId}` : demoChannelUrl} className='
      flex gap-[2rem] text-[grey]'>
      <h4>{snippet?.channelTitle || demoChannelTitle}</h4>
      <CheckCircle  />
      </Link>


     </CardContent>


    </Card>
    
  
  )
}
