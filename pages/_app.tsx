import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import GlobalStyle from '../styles/global/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
