import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Header from './organisms/Header'
import Button from './atoms/Button'
import ScrollPrompt from './molecules/ScrollPrompt'

type Props = {}

function HeroPage({}: Props) {
  const [showScrollPrompt, setShowScrollPrompt] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowScrollPrompt(true)
    }, 5000)

    window.addEventListener('scroll', () => {
      setShowScrollPrompt(false)
      clearTimeout(timeout)

      if (window.pageYOffset === 0) {
        timeout = setTimeout(() => {
          setShowScrollPrompt(true)
        }, 15000)
      }
    })

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <Container>
      <Header />
      <TextContainer>
        <Title>
          I'm a <Underline>developer.</Underline>
        </Title>
        <Information>
          I'm currently studying for my M.S. in Computer Science at the Norwegian University of Science and Technology.
          <br /> I will be graduating in 2023.
        </Information>
      </TextContainer>
      <ContactButton>
        <Button onClick={() => (window.location.href = 'mailto:hakon@harnes.dev')}>Say hello</Button>
      </ContactButton>
      <ScrollPrompt visible={showScrollPrompt} href='' />
    </Container>
  )
}

export default HeroPage

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 2fr 1fr 0.8fr;
  align-items: center;
  padding-top: 3rem;
  gap: 5rem;
`

const TextContainer = styled.div`
  align-self: end;

  * {
    margin: 0;
  }
`

const Title = styled.h1`
  font-family: 'Lora';
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 1rem;
`
const Underline = styled.span`
  position: relative;
  display: inline-block;
  isolation: isolate;

  &::after {
    content: '';
    display: block;
    height: 0.35rem;
    width: 100%;
    border-radius: 50vw;
    background: var(--color-secondary);
    transform: translateY(-0.85rem);
    position: absolute;
    z-index: -1;
  }
`

const Information = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 42rem;
`
const ContactButton = styled.div`
  align-self: start;
`

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  letter-spacing: 0.1rem;
  color: #868686;
`
