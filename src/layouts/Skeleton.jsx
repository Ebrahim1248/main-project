import React, { useState } from 'react'

const Skeleton = () => {


  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
      {/* <!-- Skeleton Card --> */}
      <div className="animate-pulse">
        <div className="bg-gray-300 h-40 w-full rounded-md"></div>

        {/* <!-- Text placeholders --> */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* <!-- Button placeholder --> */}
        <div className="mt-6 h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-300 h-40 w-full rounded-md"></div>

        {/* <!-- Text placeholders --> */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* <!-- Button placeholder --> */}
        <div className="mt-6 h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-300 h-40 w-full rounded-md"></div>

        {/* <!-- Text placeholders --> */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* <!-- Button placeholder --> */}
        <div className="mt-6 h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-300 h-40 w-full rounded-md"></div>

        {/* <!-- Text placeholders --> */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* <!-- Button placeholder --> */}
        <div className="mt-6 h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-300 h-40 w-full rounded-md"></div>

        {/* <!-- Text placeholders --> */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* <!-- Button placeholder --> */}
        <div className="mt-6 h-10 bg-gray-300 rounded"></div>
      </div>

    </div>
  )
}

export default Skeleton

