import classes from '../styles/Summary.module.css'
import img from '../assets/images/success.png'
export default function Summary({score,noq}) {
    return (
        <div class={classes.summary}>
          <div class={classes.point}>
          
            <p class={classes.score}>
              Your score is <br />
             {score} out of {noq}
            </p>
          </div>

          <div class={classes.badge}>
            <img src={img} alt="Success" />
          </div>
        </div>

    )
}
