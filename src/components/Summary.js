import classes from '../styles/Summary.module.css'
import img from '../assets/images/success.png'
export default function Summary() {
    return (
        <div class={classes.summary}>
          <div class={classes.point}>
          
            <p class={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div class={classes.badge}>
            <img src={img} alt="Success" />
          </div>
        </div>

    )
}
