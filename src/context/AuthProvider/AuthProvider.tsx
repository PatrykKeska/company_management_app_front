import { createContext } from 'react'

export const AuthProvider = createContext({
  loginStatus: false,
  setLogginStatus: (s: boolean) => {},
})
