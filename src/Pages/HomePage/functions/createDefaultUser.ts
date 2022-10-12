import { FormEvent } from 'react'
import { apiURL } from '../../../utils/api'

export const createDefaultUser = async (
  e: FormEvent
) => {
  e.preventDefault()

  await fetch(`${apiURL}/user/default-user`, {
    method: 'GET',
    credentials: 'include',
  })
}
