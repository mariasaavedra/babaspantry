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
        <Content layout='horizontal'>
          <div>
            <img src="/images/BP_1.jpeg"></img>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quaerat! Veritatis cumque id ipsam voluptatum nostrum deserunt autem debitis ad quae odit! Expedita iste quos tempore reiciendis. Minus, ipsam error.</p>
          </div>
          <div>
            <img src="/images/BP_3.jpeg"></img>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quaerat! Veritatis cumque id ipsam voluptatum nostrum deserunt autem debitis ad quae odit! Expedita iste quos tempore reiciendis. Minus, ipsam error.</p>
          </div>
          <div>
            <img src="/images/BP_4.jpeg"></img>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quaerat! Veritatis cumque id ipsam voluptatum nostrum deserunt autem debitis ad quae odit! Expedita iste quos tempore reiciendis. Minus, ipsam error.</p>
          </div>
        </Content>
      </LayoutHorizontal>
    </div>
  )
}

export default Home
