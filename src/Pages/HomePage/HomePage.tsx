import React from 'react'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { Nav } from '../../Layouts/GeneralUse/Nav/Nav'
import { Title } from '../../Components/Title /Title'
import { LogoutButton } from '../../Components/logoutButton/LogoutButton'

export const HomePage = () => {
  const bodyDetails = {
    email: 'testziom@gmail.com',
    pwd: 'randompassword123',
  }

  const login = async () => {
    const data = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      body: JSON.stringify(bodyDetails),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
    console.log(await data.json())
  }

  return (
    <>
      <Wrapper>
        <Nav />
        <Title onClick={login}>Inventory Management</Title>
        <LogoutButton />
      </Wrapper>
    </>
  )
}
