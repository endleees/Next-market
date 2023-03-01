import Image from "next/image"
import OrderButtons from "../order-button/orderButtons"

export default function Card({element}:any){
    const price:number = element.price*70
    const hit =(count:number)=>{
        if(count>300){
            return <div>
                Хит
            </div>
        }
    }
   
    return (
        <div>
            {
                hit(element.rating.count)
            }
            <Image src={`${element.image}`} width={100} height={100} alt={element.category}></Image>
            <span>
                {element.category}
            </span>
        <h3>
            {element.title}
        </h3>
        <div>
            {price}₽
            <span>
                /шт.
            </span>
        </div>
        <OrderButtons element={element}></OrderButtons>
        </div>
        
    )
}