import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from '@next/font/google'
import  MainLayout  from './components/header/main-layout/mainLayout'
import styles from './index.module.scss'
import Cards from './components/cards/cards'
import { useEffect, useState } from 'react'
import axios from 'axios';



const roboto = Roboto({ subsets: ["cyrillic"],weight: "500" })

export default function Home({cards}:any) {
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)
  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/hello')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])
  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>
  return (
    <MainLayout>
      <div className={styles.main_wrapper}>

      
      <h2 className={styles.title}>
        Всё для комфортной работы
      </h2>
      </div>
      <Cards cardsList={cards}></Cards>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
  const data = await response.data;
  return {
    props: {
      cards: data,
    },
  };
}