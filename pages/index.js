import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import css from '../styles/Home.module.css'
import Hero from '../components/Hero'

export default function Home() {
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
        </main>
      </div>
    </Layout>
  )
}
