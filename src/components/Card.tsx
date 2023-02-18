import clsx from 'clsx'
import React from 'react'

export default function Card (
  { className, red, ...props }:
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    { red?: boolean }
) {
  return (
    <div
      className={clsx(
        'relative rounded-xl p-6 shadow-lg',
        {
          'bg-white dark:bg-gray-900': !red,
          'bg-red-600 dark:bg-red-700': red,
        },
        className
      )}
      {...props}
    />
  )
}
