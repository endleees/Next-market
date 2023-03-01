import { useEffect, useRef, useState } from 'react'
import styles from './orderButton.module.scss'
import { addItem, removeItem } from '../../../../redux/cart/slice';
import { addFavorites, removeFavorites } from '../../../../redux/favorites/slice';
import { useDispatch, useSelector } from 'react-redux';
import OrderButton from "../../button/order-button";
import axios from "axios/index";
export default function OrderButtons({element}:any) {
    const [amount,setAmount]=useState(1);
    const [buttonText, setButtonText] = useState('В корзину');
    const dispatch = useDispatch();
    let data:any= useSelector((state):any => state?.cart)
    let dataFavor:any= useSelector((state):any => state?.favorites)
    function initClassButton (){
        const findItem = data.items?.find((obj:any) => obj.id === element.id)
        if(findItem){
            return styles.add_button_added
        }
        return styles.add_button_default
    }
    useEffect(()=>{

    })
    function initTextButton (){
        const findItem = data.items?.find((obj:any) => obj.id === element.id)

        if(findItem){
            return `В корзине`
        }
        return `В корзину`
    }
    function increment (){
        setAmount(amount + 1);
    }
    
    function decrement (){
        amount > 1 && setAmount(amount - 1);
    }
    const item:any ={
        id: element.id,
        title: element.title,
        price: element.price,
        description: element.description,
        category: element.category,
        image: element.image,
        rating: element.rating,
        count: amount,
    }
    function setState(event:any) {
        const findItem = data.items?.find((obj:any) => obj.id === element.id)
        if (findItem){
            event.target.innerHTML="В корзину"
            event.target.classList.remove(styles.add_button_added)
            return dispatch(removeItem(item.id));
        }
        event.target.innerHTML="В корзине"
        event.target.classList.add(styles.add_button_added)

        return dispatch(addItem(item));
    }
    function setFavorites() {
        const findItem = dataFavor.items?.find((obj:any) => obj.id === element.id)
        if (findItem){
            return dispatch(removeFavorites(item.id));   
        }
        dispatch(addFavorites(item));
    }
   
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <OrderButton onClick={(event:any)=> {setState(event)}} className={initClassButton()} text={initTextButton()}></OrderButton>
                <div className={styles.add_button_counter_wrapper}>
                    <button onClick={()=>decrement()} className={styles.add_button_counter}>-</button>
                    <span>{amount}</span>
                    <button onClick={()=>increment()} className={styles.add_button_counter}>+</button>
                </div>
            </div>
            <button onClick={()=> {setFavorites()}}> <span className=''></span></button>
        </div>
    )
    
}
