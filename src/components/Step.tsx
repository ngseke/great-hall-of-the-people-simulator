import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Step ({ index, active, name, children }: {
    index: number,
    active?: boolean,
    name: string,
    children?: ReactNode,
}) {
  return (
    <div className={clsx('flex flex-col space-y-4 transition-all duration-500', {
      'opacity-50': !active,
    })}
    >
      <div className="flex items-center space-x-3 whitespace-nowrap">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-bold text-red-600 dark:text-red-700">
          {index}
        </div>
        <div className={clsx('origin-left text-xl font-bold tracking-wider text-white transition-all duration-500', {
          'scale-[130%]': active,
        })}
        >
          {name}
        </div>
      </div>
      {
        children &&
          <div className="pl-8">
            {children}
          </div>
      }
    </div>
  )
}
