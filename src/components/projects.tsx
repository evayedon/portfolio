import React from 'react'

export default function projects() {
  return (

    <div>
      <div className='border-5 h-100 w-150 text-white bg-gradient-to-b from-orange-500 to-white flex'>
        <div className='h-[20%]'>{/*image section; the image for the project goes here*/}</div>
        <div className='h-[75%] '>{/* the summary of the project here*/}
        <h1 className='text-xl'>{/*Development type */} WEB DEVELOPMENT</h1>
        <h2 className='text-3xl'>{/*Project name*/}Smart Parking System Simulator</h2>
        <p >{/*Project description */}Advanced Python application simulating smart parking solutions. Implements object-oriented principles and optimized algorithms for efficient parking management with real-time availability tracking.</p>
        </div>

      </div>
    </div>
  )
}
