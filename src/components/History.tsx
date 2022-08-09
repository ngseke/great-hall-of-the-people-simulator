import useLogs from '../hooks/useLogs'
import Card from './Card'
import LogItem from './LogItem'

export default function History () {
  const { logs, clearLogs } = useLogs()

  if (!logs.length) return <></>

  return (
    <div className="flex justify-center text-gray-700 dark:text-gray-300">
      <div className="flex-initial w-full lg:w-2/3 xl:w-1/2 ">
        <Card>
          <h2 className="text-3xl font-semibold lg:leading-10 mb-4">歷史表決記錄</h2>
          <div className="space-y-3 mb-4">
            {
              [...logs].reverse().splice(0, 5).map((log) => (
                <LogItem log={log} key={log.id}/>
              ))
            }
          </div>
          <a
            href="#"
            className="underline"
            onClick={(e) => {
              e.preventDefault()
              clearLogs()
            }}
            title="清除歷史表決記錄"
          >變成不具現實意義的「歷史文件」</a>
        </Card>
      </div>
    </div>
  )
}
