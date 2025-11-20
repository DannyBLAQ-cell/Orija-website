import React from 'react'
import Counter from './Counter'
import { useState, useEffect  } from 'react'
const Works = () => {

  return (
<>
  <div className="flex justify-around pt-15 ">
   
      <div className="gap-40 flex  bg-gradient-to-r text-blue-600 ">
        <div>
       
          <Counter target={5000} duration={2000} /> 
            <p className="text-lg text-center">Active Users</p>
        </div>

        <div>
     
          <Counter target={10000} duration={2500} />  
             <p className="text-sm  text-center">Items Listed</p>
        </div>

        <div>
       
          <Counter target={25000} duration={3000} /> 
            <p className="text-lg text-center">Successful Sales</p>
        </div>

        <div>
       
          <Counter target={4.8} duration={3000} /> 
            <p className="text-lg text-center">Average rating</p>
        </div>
      </div>
    </div>

</>
  )
}

export default Works