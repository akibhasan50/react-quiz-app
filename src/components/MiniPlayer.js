import classes from '../styles/Miniplayer.module.css'
import ReactPlayer from "react-player/youtube";

import { useRef, useState } from 'react'
export default function MiniPlayer({id,title}) {
  const buttonRef =  useRef()
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer(){
    if (!status) {
      
      buttonRef.current.classList.remove(classes.floatingBtn);
     
      setStatus(true);
    } else {
 
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
    return (
        <div  onClick={toggleMiniPlayer} ref={buttonRef} className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
        <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
        <span onClick={toggleMiniPlayer} className={`material-icons-outlined ${classes.close}`}> close </span>
        <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
      </div>
    )
}
