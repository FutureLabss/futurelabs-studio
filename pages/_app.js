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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <meta
          name="FutureLabs Studio Website"
          content="Learn more about the FutureLabs Community & Work"
        />
        <meta property="og:title" content="FutureLabs Studio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/usenmfon/image/upload/v1666106277/about_7_gtj6xz.png" />
        <meta property="og:url" content="https://futurelabs.studio/" />
        <meta property="og:description" content="Learn more about the FutureLabs Community & Work" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://futurelabs.studio/" />
        <meta property="twitter:title" content="FutureLabs Studio" />
        <meta property="twitter:description" content="Learn more about the FutureLabs Community & Work" />
        <meta property="twitter:image" content="https://res.cloudinary.com/usenmfon/image/upload/v1666106277/about_7_gtj6xz.png" />
        <meta httpEquiv="Content-Security-Policy" content="media-src https://res.cloudinary.com;" />
        <title>Futurelabs Studio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
