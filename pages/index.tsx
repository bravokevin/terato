import Head from 'next/head'
import Container from '@mui/material/Container'
import NavBar from '../components/nav/NavBar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Terato</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero/>
      {/* <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols1 lg:grid-cols12 gap-12'></div>
      </div> */}
    </>
  )
}
