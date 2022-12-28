import Image from 'next/image'
import Link from 'next/link'
import styles from './navigation.module.scss'
export default function Navigation ({}){
    return (
        <>
        <nav className={styles.navigation}>
            <Link className={styles.logo} href={'/'}>
            <h1 className={styles.logo}>
                Market
            </h1>
            </Link>
            <div className={styles.wrapper}>
                <Link href={'/order'}>
                    <Image src={'./cart.svg'} width={25} height={24} alt='Корзина'/>  
                </Link>
                <Link href={'/favorites'}>
                    <Image src={'./favorite.svg'} width={25} height={24} alt='Корзина'/>  
                </Link>
            </div>
        </nav>
        </>
    )
}