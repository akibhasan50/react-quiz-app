import classes from '../styles/Miniplayer.module.css'
import img from '../assets/images/3.jpg'
export default function MiniPlayer() {
    return (
        <div class={`${classes.miniPlayer} ${classes.floatingBtn}`}>
        <span class={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
        <span class={`material-icons-outlined ${classes.close}`}> close </span>
        <img src={img} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    )
}
