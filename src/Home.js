import React,{useState,useEffect} from 'react'
import {db} from './fire'

export default function Home() {
  const [list,setList]=useState([])
  useEffect(()=>{
    retrieve()
  },[])
  async function retrieve(){
    const dataRef=db.collection("store").orderBy("date","asc")
    const snapShot=await dataRef.get()
   console.log(snapShot)
   setList(snapShot.docs.map(doc=>(
    {
      date:doc.data().date.toDate().toDateString(),
      message:doc.data().message
    }
   )))
  }
  return (
    <div>
       {
        list.map((listItem)=>(
          <p key={listItem.message}>{listItem.message}</p>
        ))
       }
    </div>
  )
}
