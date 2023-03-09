import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content/Content'
import LayoutHorizontal from '../components/LayoutHorizontal/LayoutHorizontal'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutHorizontal>
        <Navbar></Navbar>
        <Content></Content>
      </LayoutHorizontal>
    </div>
  )
}

export default Home
