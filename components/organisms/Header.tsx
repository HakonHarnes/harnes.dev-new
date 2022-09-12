import React from 'react'
import styled from 'styled-components'

import Profile from '../molecules/Profile'
import ThemeToggle from '../atoms/ThemeToggle'
import Link from '../atoms/Link'

type Props = {}

function Header({}: Props) {
  return (
    <Container>
      <Profile className='profile' src='/avatar.png' size={54} name='Håkon Harnes' />
      <Link href='https://github.com/HakonHarnes'>GitHub</Link>
      <Link href='https://www.linkedin.com/in/h%C3%A5kon-harnes-b88352209/'>LinkedIn</Link>
      <Link href='mailto:hakon@harnes.dev'>Email</Link>
      <ThemeToggle />
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  height: 4rem;

  .profile {
    flex-grow: 1;
  }
`
