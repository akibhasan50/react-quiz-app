import React, { useEffect, useState } from 'react'
import {getDatabase,orderByKey,ref,query,get, startAt, limitToFirst} from 'firebase/database'
export default function useVideoList(page) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [videos, setVideos] = useState([])

   useEffect(() => {
      async function fetchVideoList (){
            const db = getDatabase()
            const vidosRef = ref(db, 'videos')

            const videoQuery =query(
                vidosRef,
                orderByKey(),
                startAt(""+page),
                limitToFirst(6)

            )

            try {
                setError(false)
                setLoading(true)
                const snapshot = await get(videoQuery);
                setLoading(false)
                if(snapshot.exists()){
                    setVideos((prevVideos) =>{
                        return [...prevVideos, ...Object.values(snapshot.val())]
                    })
                    
                }else{
                    setHasMore(false)
                    
                }
               
              } catch (err) {
                  console.log(err)
                  setLoading(false)
                  setError(true)
              }
      }

    

      fetchVideoList()
   }, [page])

   return{
       loading,
       error,
       videos,
       hasMore
   }
}
