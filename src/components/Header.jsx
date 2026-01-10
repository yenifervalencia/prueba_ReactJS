import React from 'react'
import './../index.css'

export const Header = () => {
  return (
    <header className='flex flex-col fixed w-full px-4 py-2 z-[100] gap-2 gradient-color shadow'>
      <div className='flex justify-between'>
        
        <h1 className='text-white text-2xl font-bold'>Mi proyecto</h1>
        <img className='h-8 flex justify-end' src="src/assets/iconno.png" alt="" />
      </div>
        
    </header>
  )
}
