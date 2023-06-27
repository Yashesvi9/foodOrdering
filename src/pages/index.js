import Head from 'next/head'
//import styles from '@/styles/Home.module.css'
import Featured from '../../components/Featured'
import PizzaList from "../../components/PizzaList";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in ULM</title>
        <meta name="description" content="Best pizza restaurant in town" />
    
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      
      <PizzaList/>
    </>
  )
}
