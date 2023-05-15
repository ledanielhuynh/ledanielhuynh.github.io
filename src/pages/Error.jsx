import React from 'react'
import danielsad from '../assets/danielsad.png';

const Error = () => {
  return (
    <div className='flex flex-col justify-center place-items-center text-white pt-40 pb-20'>
        <div className='flex flex-row justify-center place-items-center'>
          <h1 className='text-9xl'>4</h1>
          <img src={danielsad} alt="Daniel Memoji" className='w-24'/>
          <h1 className='text-9xl'>4</h1>
        </div>
        <h2 className='text-4xl'>Page not found</h2>
    </div>
  )
}

export default Error