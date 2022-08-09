import { useMemo } from 'react'
import dayjs from 'dayjs'
import dayjsZhTw from 'dayjs/locale/zh-tw'
import Log from '../types/Log'
import Card from './Card'

dayjs.locale(dayjsZhTw)

export default function LogItem ({ log }: { log: Log }) {
  const formattedDate = useMemo(() => {
    const instance = dayjs(log.timestamp)
    const genesis = 2013
    const year = instance.year() - genesis
    return `慶豐 ${year} 年 ${instance.format('M 月 D 日')}`
  }, [log])

  return (
    <Card red>
      <div className="flex items-center text-white">
        <div className="flex-grow">
          <div className="flex mb-1">
            {formattedDate}
          </div>
          <div className="text-xl font-serif text-yellow-300">
            {log.message}
          </div>
        </div>
        <div className="flex flex-col items-center flex-shrink-0 ml-6">
          <span className="inline-block text-3xl scale-125">👏</span>
          <span className="text-lg font-bold">通過</span>
        </div>
      </div>
    </Card>
  )
}
