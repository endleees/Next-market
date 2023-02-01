import { useState } from "react";
import Card from "./card/card";
import styles from './cards.module.scss'


export default function Cards({cardsList}:any){
    return(
        <section className={styles.wrapper}>
        { 
            cardsList.map((card:any) =>{
                return <Card element={card} key={card.id}></Card>
            })
        }
        </section>
    )
            
    
}
