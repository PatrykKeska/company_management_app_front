import React, { useContext } from 'react'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { Title } from '../../Components/Title /Title'
import { LoginForm } from '../../Layouts/GeneralUse/LoginForm/LoginForm'
import { AuthProvider } from '../../context/AuthProvider/AuthProvider'
import { LogoutButton } from '../../Components/logoutButton/LogoutButton'
import { logoutUser } from './functions/logoutUser'
import { useSession } from './hooks/useSession'

export const HomePage = () => {
  const { setLoginStatus } = useContext(AuthProvider)
  const sessionStatus = useSession()

  return (
    <>
      <Wrapper>
        {sessionStatus ? (
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
