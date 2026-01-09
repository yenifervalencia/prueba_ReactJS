import React from 'react'
import './../index.css'

export const Header = () => {
  return (
    <header className='flex flex-col fixed w-full px-4 py-2 z-[100] gap-2 gradient-color'>
        <h1 className='text-white font-bold'>Mi proyecto</h1>
    </header>
  )
}
