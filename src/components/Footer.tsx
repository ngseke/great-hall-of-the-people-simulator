import React from 'react'
import github from '../assests/github.svg'
import DarkModeToggler from './DarkModeToggler'

export default function Footer () {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 mt-10">
      <div className="flex flex-col space-y-4 container px-4 py-6">
        <div className="flex items-center space-x-4 dark:invert">
          <DarkModeToggler/>
          <a
            href="https://github.com/ngseke/great-hall-of-the-people-simulator" target="_blank"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={github} alt="GitHub"/>
          </a>
        </div>

        <div
          className="text-gray-700 dark:text-gray-300 text:md italic"
          title="習近平親自授權"
        >Approved by president Xi</div>
      </div>
    </div>
  )
}
