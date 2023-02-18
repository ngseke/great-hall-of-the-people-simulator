import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Quote ({ children, className }: {
    children?: ReactNode,
    className?: string
}) {
  return (
    <div className={clsx('flex items-start text-yellow-300', className)}>
      <div className="scale-150 select-none text-3xl after:content-['❝']"/>
      <div className="pl-3 font-serif text-2xl leading-8 tracking-wide lg:text-3xl lg:leading-10">
        {children}
      </div>
    </div>
  )
}
