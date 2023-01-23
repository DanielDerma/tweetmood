import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
    <main className="font-sans m-5 mx-8">
      <Header />
      <Component {...pageProps} />
    </main>
  </>
}
