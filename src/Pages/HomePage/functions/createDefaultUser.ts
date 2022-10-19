import { FormEvent } from 'react'
import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList

export const createDefaultUser = async (
  e: FormEvent
) => {
  e.preventDefault()

  await fetch(`${basicUrl}/user/default-user`, {
    method: 'GET',
    credentials: 'include',
  })
}
