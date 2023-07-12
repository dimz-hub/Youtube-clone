import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

export default function Videos({videos ,direction }) {

  return (
    <div className= {`flex flex-${direction || 'row'} justify-center items-center flex-wrap gap-3 videos`} >

        {
            videos.map(({id, snippet, }) => {
                return (
                    <div key= {id.videoId}>
                        {
                           id.videoId && <VideoCard key={id.videoId} id = {id} snippet = {snippet} />
                        }
                        {
                            id.channelId && <ChannelCard key={id.channelId} id = {id} snippet = {snippet}/>
                        }
                    </div>
                )
            })
        }
    </div>
  )
}
