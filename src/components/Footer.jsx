import React from 'react'
import './../index.css'

export const Footer = () => {
  return (
     <footer className='flex flex-col fixed w-full px-4 py-2 z-49 bottom-0 gap-2 gradient-color'>
      <div className='text-white font-bold flex justify-end'>
        &copy; Yenifer Valencia Estrada
      </div>
    </footer>
  )
}
