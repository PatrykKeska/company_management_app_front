import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button /Button'
import { StyledLabel } from '../../../Components/StyledLabel/StyledLabel'
import { InputOnChange, onSubmitType } from '../../../types/common.types'
import { AuthProvider } from '../../../context/AuthProvider/AuthProvider'
import { apiURL } from '../../../utils/api'
import { log } from 'util'
import { ResponseModal } from '../../../MaterialUIComponents/ResponseModal'

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const LoginForm = () => {
  const { setLoginStatus } = useContext(AuthProvider)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [message, SetMessage] = useState({ title: '', message: '' })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = async (e: onSubmitType) => {
    e.preventDefault()
    await fetch(`${apiURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({ email: login, pwd: password }),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        if (response.status === 200) {
          setLoginStatus(true)
        } else if (response.status === 401) {
          SetMessage({ title: 'Fail', message: response.error })
          handleOpen()
        }
      })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Login:
        <Input
          value={login}
          type={'text'}
          name={'login'}
          onChange={(event: InputOnChange) => setLogin(event.target.value)}
        />
      </StyledLabel>

      <StyledLabel>
        Password:
        <Input
          name={'password'}
          value={password}
          onChange={(event: InputOnChange) => setPassword(event.target.value)}
          type={'password'}
        />
      </StyledLabel>

      <Button>Sign in</Button>
      <ResponseModal
        open={open}
        handleClose={handleClose}
        message={{ title: message.title, message: message.message }}
      />
    </StyledForm>
  )
}
