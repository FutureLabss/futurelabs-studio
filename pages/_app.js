import '../styles/globals.css'
import "@fontsource/inter"
import { ThemeProvider } from '@mui/material'
import Head from 'next/head'
import theme from "../styles/theme"
import createEmotionCache from '../styles/createEmotionCache'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" /> 
        <meta name="viewport" content="width=device-width, intial-scale=1.0" /> 
        <title>Futurelabs Studio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
