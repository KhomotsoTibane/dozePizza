import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Doze Pizza</title>
          <link rel='icon' href='/Logo.png'/>
        </Head>
        {/* {body} */}
        <main>
          <h1>Hello</h1>
        </main>
      </div>
    </Layout>
  )
}
