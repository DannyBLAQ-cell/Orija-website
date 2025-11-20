import React from 'react'
import { useState, useEffect } from 'react'

    
    const Counter=({target, duration})=>{
  const[count, setCount]= useState(0)

  useEffect(()=>{
    let start=0;
    let increment=  target / (duration / 50);;

    const counter= setInterval(()=>{
        start += increment;
        if(start>= target){
            start= target;
            clearInterval(counter)
        }
        setCount(Math.floor(start));
    },50)
    return ()=> clearInterval(counter);
  },[target, duration])
    
  return (
<>
<div className='text-6xl font-bold'>
    
  {count+'+'}  
    </div></>
  )
}

export default Counter