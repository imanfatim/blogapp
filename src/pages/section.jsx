import React from 'react'
import { Link } from 'react-router-dom';

const section = () => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center bg-center bg-fixed " style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg')", height: "695px" }}>
      <div className="absolute inset-0 overflow-hidden bg-fixed bg-black bg-opacity-60">
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Bloggig Website</h2>
           
            <Link to={'/about'}>
               <button
            
            type="button"
            className="rounded border-2 border-gray-50 px-7 py-[8px] text-sm text-yellow-300 font-medium uppercase leading-normal text-gray-50 transition duration-150 ease-in-out hover:border-gray-100 hover:bg-gray-500 hover:bg-opacity-10 hover:text-gray-100 focus:border-gray-100 focus:text-gray-100 focus:outline-none focus:ring-0 active:border-gray-200 active:text-gray-200 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 "
            data-twe-ripple-init
            data-twe-ripple-color="light">
              
            Show more
          </button>
            </Link>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    </div>
  )
}

export default section
