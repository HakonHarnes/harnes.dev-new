import React from 'react'
import Styled from 'styled-components'
import Image from 'next/image'

type Props = {
  src: string
  size: number
}

function Avatar({ src, size }: Props) {
  return (
    <Container>
      <Image src={src} alt='Avatar' width={size} height={size} />
    </Container>
  )
}

export default Avatar

const Container = Styled.div`
  width: {$props => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
`
