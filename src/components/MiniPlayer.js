import classes from '../styles/Miniplayer.module.css'
import img from '../assets/images/3.jpg'
import { useRef, useState } from 'react'
export default function MiniPlayer() {
  const buttonRef =  useRef()
  const [status, setStatus] = useState(false);

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
        <img src={img} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    )
}
