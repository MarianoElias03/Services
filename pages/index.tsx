import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { Navbar } from "../components"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PunchClean</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className={styles.cover}>
            <h1 className="text-capitalize text-white">Washing Services for your home and offices</h1>
          </div>

        </div>
      </main>
    </>
  )
}
