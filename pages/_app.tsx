import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
    </Head>

    <Component {...pageProps} />

    </>
  ) 
}
