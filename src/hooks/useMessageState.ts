import { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import useQuery from './useQuery'

const queryKey = 'm'

export default function (initialState: string) {
  const { pathname } = useLocation()
  const query = useQuery()
  const history = useHistory()

  const [message, setMessage] = useState<string>(
    (query.get(queryKey) || initialState) ?? ''
  )

  const setMessageAndSetQuery = (message: string) => {
    setMessage(message)
    history.replace({
      pathname,
      search: message ? `?${queryKey}=${message}` : undefined,
    })
  }

  return {
    message,
    setMessage: setMessageAndSetQuery,
  }
}
