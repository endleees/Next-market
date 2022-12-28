import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from '@next/font/google'
import { MainLayout } from './components/header/main-layout/mainLayout'
import styles from './index.module.scss'
import { getData } from './api/api'
import Cards from './components/cards/cards'


const roboto = Roboto({ subsets: ["cyrillic"],weight: "500" })

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.main_wrapper}>

      
      <h2 className={styles.title}>
        Всё для комфортной работы
      </h2>
      </div>
      <Cards></Cards>
    </MainLayout>
  )
}
