import { Link } from "react-router-dom";
import Video from "./Video";
import useVideoList from '../hooks/useVideoList'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";

export default function Videos() {
 const [page, setPage] = useState(1)
 
 const{ loading, error,videos,hasMore}=useVideoList(page)
  return (
    <div>

{
 videos.length > 0 && (
 
      <InfiniteScroll
      dataLength={videos.length} //This is important field to render the next data
      next={() => setPage(page +8)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
          { videos.map(video =>(
            video.noq > 0 ?(
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                  <Video title={video.title} id={video.youtubeID} noq={video.noq}/>  
                  
              </Link> 
            ) :(
                  <Video title={video.title} key={video.youtubeID} id={video.youtubeID} noq={video.noq}/>  
                  
            )
              
            ))}
      </InfiniteScroll>)  

}
       {!loading && videos.length === 0 && <div>No data found</div>}
       {error && <div>There was an error</div>}
       {loading && <h1>Loading...</h1>}
       
          
    </div>
  );
}
