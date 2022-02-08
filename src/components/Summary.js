import classes from '../styles/Summary.module.css'
import img from '../assets/images/success.png'
import useFetch from '../hooks/useFetch';
import { useMemo } from 'react';
export default function Summary({score,noq}) {

  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization:'563492ad6f9170000100000154ac85380fcb476382227d21c4d78877',
    }
  );

  const image = result ? result?.photos[0].src.medium : img;

    return (
        <div class={classes.summary}>
          <div class={classes.point}>
          
            <p class={classes.score}>
              Your score is <br />
             {score} out of {noq}
            </p>
          </div>

          {loading && <div className={classes.badge}>Loading your badge...</div>}

{error && <div className={classes.badge}>An error occured!</div>}

{!loading && !error && (
  <div className={classes.badge}>
    <img src={image} alt="Success" />
  </div>
)}
        </div>

    )
}
