import React from 'react'
import useDarkMode from 'use-dark-mode-hook'
import sun from '../assests/sun.svg'
import moon from '../assests/moon.svg'

export default function DarkModeToggler () {
  const [isDarkMode, toggleDarkMode] = useDarkMode({
    initialValue: true,
    element: 'html',
  })

  return (
    <button
      type="button"
      onClick={() => toggleDarkMode(!isDarkMode)}
    >
      <img className="h-6 w-6" src={isDarkMode ? sun : moon}/>
    </button>
  )
}
