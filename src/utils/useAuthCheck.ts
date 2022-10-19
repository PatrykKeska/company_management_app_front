import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthProvider } from '../context/AuthProvider/AuthProvider'
import { ApiList } from './api'

export function useAuthCheck() {
  const { setLoginStatus } = useContext(AuthProvider)
  const {basicUrl} = ApiList
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const data = await fetch(`${basicUrl}/user`, {
        method: 'GET',
        credentials: 'include',
      })
      const response = await data.json()
      if (response.statusCode === 401) {
        setLoginStatus(false)
        localStorage.setItem('session', JSON.stringify(false))
        navigate('/')
      }
    })()
  }, [])
}
