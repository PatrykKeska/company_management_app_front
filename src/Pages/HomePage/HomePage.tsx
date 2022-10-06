import React, { useContext } from 'react'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { Title } from '../../Components/Title /Title'
import { LoginForm } from '../../Layouts/GeneralUse/LoginForm/LoginForm'
import { AuthProvider } from '../../context/AuthProvider/AuthProvider'
import { LogoutButton } from '../../Components/logoutButton/LogoutButton'
import { logoutUser } from './functions/logoutUser'

export const HomePage = () => {
  const { setLoginStatus, loginStatus } = useContext(AuthProvider)
  return (
    <>
      <Wrapper>
        {loginStatus ? (
          <>
            <Nav />
            <Title>Inventory Management</Title>
            <form onSubmit={(e) => logoutUser(e, setLoginStatus)}>
              <LogoutButton />
            </form>
          </>
        ) : (
          <>
            <Title>Inventory Management</Title>
            <LoginForm />
          </>
        )}
      </Wrapper>
    </>
  )
}
