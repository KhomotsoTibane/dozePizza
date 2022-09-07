import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import css from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Menu from '../components/Menu'
import {client} from "../lib/client"

export default function Home({pizzas}) {
  
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Doze Pizza</title>
          <link rel='icon' href='/Logo.png'/>
        </Head>
        {/* {body} */}
        <main>
          <Hero/>
          <Services/>
          <Menu pizzas={pizzas}/>
        </main>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query)
  return{
    props:{
      pizzas
    }
  }
}
