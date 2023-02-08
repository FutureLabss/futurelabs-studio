import '../styles/globals.css'
import "@fontsource/inter"
import { ThemeProvider } from '@mui/material'
import theme from "../styles/theme"
import createEmotionCache from '../styles/createEmotionCache'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
