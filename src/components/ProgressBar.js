import { Link } from 'react-router-dom'
import classes from '../styles/Progressbar.module.css'
import Button from './Button'


export default function ProgressBar({prev, next,progress,submit}) {
    return (
        <div className={classes.progressBar}>
        <div onClick={prev} className={classes.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip}>{progress}% Cimplete!</div>
          <div className={classes.rangeBody}>
            <div className={classes.progress} style={{width: `${progress}%`}}></div>
          </div>
        </div>
 
            <Button onClick={progress === 100 ? submit : next  } className={classes.next}>
            <span>{progress === 100 ? "Submit" : "Next Question "  } </span>
            <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
          <div className="button next">
          
          </div>
       
      </div>
    )
}
