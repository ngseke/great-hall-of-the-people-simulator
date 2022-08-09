import React from 'react'
import github from '../assests/github.svg'
import DarkModeToggler from './DarkModeToggler'

export default function Footer () {
  return (
    <div className="mt-10 bg-gray-100 dark:bg-gray-900">
      <div className="container flex flex-col space-y-4 px-4 py-6">
        <div className="flex items-center space-x-4 dark:invert">
          <DarkModeToggler/>
          <a
            href="https://github.com/ngseke/great-hall-of-the-people-simulator" target="_blank"
            rel="noreferrer"
          >
            <img className="h-6 w-6" src={github} alt="GitHub"/>
          </a>
        </div>

        <div
          className="italic text-gray-700 dark:text-gray-300"
          title="習近平親自授權"
        >Approved by president Xi</div>
      </div>
    </div>
  )
}
