import { useContext, useEffect } from 'react'
import { AuthProvider } from '../../../context/AuthProvider/AuthProvider'

export const useSession = () => {
  const { setLoginStatus, loginStatus } = useContext(AuthProvider)
  const localSession = localStorage.getItem('session')
  useEffect(() => {
    setLoginStatus(JSON.parse(localSession!))
  }, [loginStatus])
  return loginStatus
}
