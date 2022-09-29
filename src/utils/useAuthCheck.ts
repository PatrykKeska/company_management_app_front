import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function useAuthCheck() {
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const data = await fetch('http://localhost:3001/user', {
        method: 'GET',
        credentials: 'include',
      })
      const response = await data.json()
      if (response.statusCode === 401) {
        navigate('/')
      }
    })()
  }, [])
}
