import classes from '../styles/Question.module.css'
import Answers from './Answers'
export default function Question({answers =[]}) {
    return (

        answers.map((answer,index) =>(
            <div class={classes.question} key={index}>
            <div class={classes.qtitle}>
             <span class="material-icons-outlined"> help_outline </span>
            {answer.title}
           </div>

           <Answers input={false} options={answer.options}></Answers>
       </div>
        ))
     
    )
}