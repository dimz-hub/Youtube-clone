import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import Videos from './Videos'
import {fetchFromApi} from '../utils/fetchFromApi'
import { CheckCircle } from '@mui/icons-material'

export default function VideoDetail() {
  const { id } = useParams();
 
const [videos, setVideos] = useState(null)
const [videoDetails, setVideoDetails] = useState(null)

const deviceWidth = window.innerWidth
useEffect(() => {
 

fetchFromApi( `videos?part=snippet,statistics&id=${id}`)
.then(({data}) => setVideoDetails(data?.items[0]))
fetchFromApi( `search?part=snippet&relatedToVideoId=${id}`)
.then(({data}) => setVideos(data?.items))

}, [id])





if(!videoDetails) return 'Loading...'
if(!videos) return 'Loading...'

const {snippet:{title, channelId, channelTitle}, statistics: { viewCount, likeCount
}} = videoDetails

const direction = (deviceWidth <= 900) ? 'row' : 'col'
const VideoHeight = (deviceWidth <= 765) ? '30vh' : '50vh'
console.log(deviceWidth)

  return (
    <div className='min-h-[95vh]'>
    <div className='video-details p-4'>
<div className='sticky top-[86px]'>
  
   <ReactPlayer className='video-player mb-0'  width= '100%' height= {VideoHeight}  url = {`https://www.youtube.com/watch?v=${id}`} controls /> 

  <h1 className='font-bold mt-[-25px] '>{title}</h1>
  <div className = 'flex justify-between'>
    <Link to={`/channel/${channelId}`} className='flex'>
     <p className='text-sm'>{channelTitle}</p>
     <CheckCircle />
    </Link>
    <div className='flex gap-2'>
      <p>{parseInt(viewCount).toLocaleString()} views</p>
      <p>{parseInt(likeCount).toLocaleString()} likes</p>
    </div>
  </div>
</div>
<div className = 'overflow-y-scroll h-[90vh]'>
<Videos videos={videos} direction = {direction}  />
</div>

    </div>
    </div>
  )
}
