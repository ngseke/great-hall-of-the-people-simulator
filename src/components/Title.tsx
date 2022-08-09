import React from 'react'
import emblem from '../assests/emblem.svg'

export default function Title () {
  return (
    <div className="mb-4 flex items-center sm:mb-10 sm:flex-col">
      <img className="mr-2 h-16 w-16 sm:mr-0 sm:mb-4 sm:h-24 sm:w-24" src={emblem}/>
      <div className="flex flex-col sm:items-center">
        <h1 className="text-3xl font-extrabold dark:text-white sm:mb-3 sm:text-5xl">
          <span>人民大會堂</span>
          <span>模擬器</span>
        </h1>
        <span className="italic text-gray-700 dark:text-gray-300 sm:text-xl">沒有，通過 👏</span>
      </div>
    </div>
  )
}
