import { useState } from 'react'
import styles from './orderButton.module.scss'
import { addItem, removeItem } from '../../../../redux/cart/slice';
import { addFavorites, removeFavorites } from '../../../../redux/favorites/slice';
import { useDispatch, useSelector } from 'react-redux';
export default function OrderButton({element}:any) {
    const [amount,setAmount]=useState(1);
    const dispatch = useDispatch();
    let counterItem =0;
    let counterFavor =0;
    function increment (){
        setAmount(amount + 1);
      };
    
    function decrement (){
        amount > 1 && setAmount(amount - 1);
    };
    const item:any ={
        id: element.id,
        title: element.title,
        price: element.price,
        description: element.description,
        category: element.category,
        image: element.image,
        rating: element.rating,
        count: amount,
        addedItem: false,
        addedFavor: false,
    }
    function setState() {
        if (item.added === true){
            item.added = false
            return dispatch(removeItem(item.id));   
        }
        item.added = true
        dispatch(addItem(item));
    }
    function setFavorites() {
        if (item.addedFavor === true){
            item.addedFavor = false
            return dispatch(removeFavorites(item.id));   
        }
        dispatch(addFavorites(item));
        item.addedFavor = false
    }
   
    return(
        <div>
            <div className={styles.wrapper}>
                <button onClick={()=> {setState()}} className={styles.add_button}>В корзину</button>
                <button onClick={()=>decrement()} className={''}>-</button>
                <span>{amount}</span>
                <button onClick={()=>increment()}>+</button>
            </div>
            <button onClick={()=> {setFavorites()}}> <span className=''></span></button>
        </div>
    )
    
}
