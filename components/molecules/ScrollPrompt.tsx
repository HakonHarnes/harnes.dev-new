import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTheme } from 'next-themes'

import ScrollIcon from '../atoms/ScrollIcon'

type Props = {
  href: string
  visible: boolean
  style?: React.CSSProperties
}

function ScrollPrompt({ href, visible }: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Container visible={visible}>
      <ScrollIcon href={href} color={theme === 'dark' ? '#fff' : '#000'} />
      <ScrollLabel style={{ color: theme === 'dark' ? '#fff' : '#000' }}>SCROLL</ScrollLabel>
    </Container>
  )
}

export default ScrollPrompt

const Container = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0.8rem;
  opacity: ${({ visible }: { visible: boolean }) => (visible ? '1' : '0')};
  transition: opacity 1s;
`

const ScrollLabel = styled.div`
  letter-spacing: 0.15rem;
  font-size: 0.8rem;
`
