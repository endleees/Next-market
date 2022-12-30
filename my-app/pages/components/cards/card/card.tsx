import Image from "next/image"
import OrderButton from "../order-button/orderButton"

export default function Card(element:any,{cards}:any){
    const price:number = element.element.price*70
    const hit =(count:number)=>{
        if(count>300){
            return <div>
                Хит
            </div>
        }
    }
    console.log(cards)
    return (
        <div>
            {
                hit(element.element.rating.count)
            }
            <Image src={`${element.element.image}`} width={100} height={100} alt={element.element.category}></Image>
            <span>
                {element.element.category}
            </span>
        <h3>
            {element.element.title}
        </h3>
        <div>
            {price}₽
            <span>
                /шт.
            </span>
        </div>
        <OrderButton cards={cards} element={element.element}></OrderButton>
        <button><span className=''></span></button>
        </div>
        
    )
}