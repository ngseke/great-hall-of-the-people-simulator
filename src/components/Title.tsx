import React from 'react'
import emblem from '../assests/emblem.svg'

export default function Title () {
  return (
    <div className="flex items-center sm:flex-col mb-4 sm:mb-10">
      <img className="w-16 h-16 sm:w-24 sm:h-24 mr-2 sm:mr-0 sm:mb-4" src={emblem}/>
      <div className="flex flex-col sm:items-center">
        <h1 className="sm:mb-3 text-3xl sm:text-5xl font-extrabold">
          <span>人民大會堂</span>
          <span>模擬器</span>
        </h1>
        <span className="text-gray-700 text:lg sm:text-xl italic">沒有，通過 👏</span>
      </div>
    </div>
  )
}
