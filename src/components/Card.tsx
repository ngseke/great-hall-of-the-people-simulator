import clsx from 'clsx'
import React from 'react'

export default function Card ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={clsx('bg-white rounded-xl shadow-lg p-6', className)}
      {...props}
    />
  )
}
