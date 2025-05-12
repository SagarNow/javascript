"use client";
import React, { useState } from 'react'

const page = () => {
  

const [ data, setData ] = useState();







  return (


    <div className='h-screen w-screen bg-gray-500 flex justify-center items-center flex-col'>



<div>{data}</div>
<div>

  <input type="text" onChange={(e) => setData(e.target.value)} className='border border-gray-300 rounded p-2 hover:border-red-500 focus:border-red-500' /> 
</div>



    </div>
  )
}

export default page