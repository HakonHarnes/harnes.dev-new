import React from 'react'
import styled from 'styled-components'

import Avatar from '../atoms/Avatar'

type Props = {
  src: string
  size: number
  name: string
  className?: string
}

function Profile({ src, size, name, className }: Props) {
  return (
    <div className={className}>
      <Container href=''>
        <Avatar src={src} size={size} />
        <Name>{name}</Name>
      </Container>
    </div>
  )
}

export default Profile

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  width: fit-content;
`

const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`
