import { useState } from 'react'
import styles from './orderButton.module.scss'
export default function OrderButton({element}:any,{cards}:any) {
    const [amount,setAmount]=useState(1);
    const addProduct =()=>localStorage.setItem('shopBasket',JSON.stringify([cards]))
   
    return(
        <div className={styles.wrapper}>
            <button onClick={()=> { addProduct()}} className={styles.add_button}>В корзину</button>
            <button onClick={()=>setAmount(amount-1)} className={''}>-</button>
            <span>{amount}</span>
            <button onClick={()=>setAmount(amount+1)}>+</button>
        </div>
    )
    
}
