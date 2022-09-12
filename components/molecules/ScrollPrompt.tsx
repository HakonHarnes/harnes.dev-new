import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTheme } from 'next-themes'

import ScrollIcon from '../atoms/ScrollIcon'

type Props = {
  href: string
}

function ScrollPrompt({ href }: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Container>
      <ScrollIcon href={href} color={theme === 'dark' ? '#25313f' : '#000'} />
      <ScrollLabel style={{ color: theme === 'dark' ? '#2e3c4d' : '#000' }}>SCROLL</ScrollLabel>
    </Container>
  )
}

export default ScrollPrompt

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0.5rem;
`

const ScrollLabel = styled.div`
  letter-spacing: 0.1rem;
`
