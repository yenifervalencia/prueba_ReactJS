import React from 'react'
import './../index.css'


export const Card = ({title, description}) => {

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col w-full p-8 article bg-white">
                <div className="text-xl font-semibold leading-tight">{title}</div>
                <div className="mt-4">
                   {description}
                </div>
            </div>
        </div>

    )
}
