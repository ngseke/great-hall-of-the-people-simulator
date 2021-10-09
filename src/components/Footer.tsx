import React from 'react'
import github from '../assests/github.svg'

export default function Footer () {
  return (
    <div className="bg-gray-100 mt-10">
      <div className="flex flex-col space-y-2 container px-4 py-6">
        <div>
          <a
            className="inline-block"
            href="https://github.com/ngseke/great-hall-of-the-people-simulator" target="_blank"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={github} alt="GitHub"/>
          </a>
        </div>

        <div
          className="text-gray-700 text:md italic"
          title="習近平親自授權"
        >Approved by president Xi</div>
      </div>
    </div>
  )
}
