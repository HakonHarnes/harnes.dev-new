import React from 'react'
import styled from 'styled-components'

import Interest from './molecules/Interest'

type Props = {}

function AboutMe({}: Props) {
  return (
    <Container>
      <TextContainer>
        <Title>Who am I?</Title>
        <Information>
          I am a student at the Norwegian University of Science and Technology. At the moment, I'm studying for my M.S.
          in Computer Science, where my specialization is Algorithms and Computers. I will be graduating in 2023.
        </Information>
      </TextContainer>
      <TerminalContainer></TerminalContainer>
      <InterestsContainer>
        <InterestsBackground></InterestsBackground>
        <Interests>
          <Interest title='Front-end'>
            I also like designing things. For reference, have a look at this website.
          </Interest>
          <Interest title='Security'>
            Security peaks my interest. My knowledge within cyber security has resulted in uncovering live
            vulnerabilites.
          </Interest>
          <Interest title='Back-end'>
            I especially find the security aspect of back-end development, like authentication and authorization, to be
            interesting.
          </Interest>
        </Interests>
      </InterestsContainer>
    </Container>
  )
}

export default AboutMe

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'information terminal'
    'interests   interests';
`

const TextContainer = styled.div`
  grid-area: information;
  align-self: center;
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
`

const Information = styled.p`
  text-align: justify;
  line-height: 1.4rem;
`

const TerminalContainer = styled.div`
  grid-area: terminal;
  width: 750px;
  height: 450px;
  border-radius: 1rem;
  background: var(--color-primary-dark);
  margin-bottom: -3rem;
  margin-left: 5rem;
  z-index: 1;
`
const InterestsContainer = styled.div`
  grid-area: interests;
  display: grid;
  align-content: center;
  height: 300px;
`

const InterestsBackground = styled.div`
  position: absolute;
  height: 300px;
  width: 100vw;
  left: calc(-50vw + 50%);
  background: var(--color-background-interests);
  z-index: 0;
`

const Interests = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  margin-top: 3rem;
  z-index: 1;
`
