import { useState } from "react";
import Card from "./card/card";



export default function Cards({cardsList}:any){
    
    return(
        
        // cards.map((card:any) =>{
        //     return <Card element={card} key={card.id}></Card>
        // })
        <pre>{JSON.stringify(cardsList)}</pre>
    )
            
    
}
Cards.getInitialProps= async ()=>{
    const response = await fetch('https://fakestoreapi.com/products/category/electronics')
    const cardsList = await response.json();
    
    return {cardsList}
}