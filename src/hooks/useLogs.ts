import { useCallback, useEffect, useRef } from 'react'
import { useLocalStorage } from 'react-use-storage'
import { nanoid } from 'nanoid'
import Log from '../types/Log'

type Logs = Log[]

export default function () {
  const key = 'great-hall-of-the-people-simulator-history'
  const [logs, setLogs, clearLogs] = useLocalStorage<Logs>(key, [])
  const logsRef = useRef<Logs>(logs)

  useEffect(() => {
    logsRef.current = logs
  }, [logs])

  const pushLog = useCallback((message: string) => {
    const log: Log = {
      message,
      timestamp: +new Date(),
      id: nanoid(),
    }
    setLogs([...logsRef.current, log])
  }, [setLogs])

  return { logs, pushLog, clearLogs }
}
