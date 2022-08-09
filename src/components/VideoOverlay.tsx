import clsx from 'clsx'
import React from 'react'

export default function VideoOverlay ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={clsx('absolute left-0 top-0 flex h-full w-full items-center justify-center', className)}
      {...props}
    />
  )
}
