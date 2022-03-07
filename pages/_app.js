import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enabledSystem={true} attribute="class">
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp