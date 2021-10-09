import clsx from 'clsx'
import React from 'react'

export default function VideoOverlay ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={clsx('w-full h-full flex justify-center items-center absolute left-0 top-0', className)}
      {...props}
    />
  )
}
