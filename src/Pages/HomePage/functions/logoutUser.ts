import { FormEvent } from 'react'
import { apiURL } from '../../../utils/api'
import { CallBackFunction } from '../../../types/CallBackFunction'

export const logoutUser = async (
  e: FormEvent,
  setLoginStatus: CallBackFunction,
) => {
  e.preventDefault()

  await fetch(`${apiURL}/user/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        setLoginStatus(true)
      } else {
        setLoginStatus(false)
      }
    })
}
