
import { useEffect, useState } from 'react'
import {getDatabase,orderByKey,ref,query,get, startAt, limitToFirst} from 'firebase/database'
export default function useQuestions(videoID) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([])

   useEffect(() => {
      async function fetchVideoList (){
            const db = getDatabase()
            const quizRef = ref(db, 'quiz/'+videoID+'/questions')

            const videoQuery =query(
                quizRef,
                orderByKey()

            )

            try {
                setError(false)
                setLoading(true)
                const snapshot = await get(videoQuery);
                setLoading(false)
                if(snapshot.exists()){
                    setQuestions((prevQuestions) =>{
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                    })
                    
                }
               
              } catch (err) {
                  console.log(err)
                  setLoading(false)
                  setError(true)
              }
      }

    

      fetchVideoList()
   }, [videoID])

   return{
       loading,
       error,
       questions
   }
}
