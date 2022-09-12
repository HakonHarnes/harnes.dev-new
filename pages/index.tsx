import type { NextPage } from 'next'
import styled from 'styled-components'

import HeroPage from '../components/HeroPage'
import AboutMe from '../components/AboutMe'
import Timeline from '../components/Timeline'
import Footer from '../components/organisms/Footer'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <HeroPage />
        <AboutMe />
        <Timeline />
        <Footer />
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
  width: min(calc(1280px + 6rem), 100%);
  padding-inline: 3rem;
`
