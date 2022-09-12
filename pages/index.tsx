import type { NextPage } from 'next'
import styled from 'styled-components'

import HeroPage from '../components/HeroPage'
import AboutMe from '../components/AboutMe'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <HeroPage />
        <AboutMe />
      </Container>
    </Layout>
  )
}

export default Home

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: min(100vh, 1500px) 1fr;
  width: min(calc(1280px + 3rem), 100%);
  padding-inline: 1.5rem;
`
