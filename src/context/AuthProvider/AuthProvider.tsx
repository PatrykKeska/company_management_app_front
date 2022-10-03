import { createContext } from 'react'

export const AuthProvider = createContext({
  loginStatus: false,
  setLoginStatus: (status: boolean) => {},
})
