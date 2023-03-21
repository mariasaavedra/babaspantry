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
          <div className='h-screen max-w-xlg'>
            <img className='h-screen w-auto' src="/images/BP_1.jpeg"></img>
          </div>
          <div className='h-screen max-w-lg '>
          <p className='text-white'>Seeking education and an opportunity to create a better life, Baba immigrated to this country as a Palestinian refugee in the late 1970s. He came to the United States alone as a young man, knowing little English without any friends or family here. He missed home and my Tayata’s (grandmother’s) cooking. Baba would often call his mother and get recipes over the phone. He began cooking these recipes and sharing his creations with professors, friends, and colleagues. Through food, Baba was able to bring people together, stay connected to his family and identity, and build friendships that would provide solace as he struggled being away from home.</p>
          </div>
          <div className='h-screen max-w-lg'>
            <img src="/images/BP_4.jpeg"></img>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quaerat! Veritatis cumque id ipsam voluptatum nostrum deserunt autem debitis ad quae odit! Expedita iste quos tempore reiciendis. Minus, ipsam error.</p>
          </div>
        </Content>
      </LayoutHorizontal>
    </div>
  )
}

export default Home
