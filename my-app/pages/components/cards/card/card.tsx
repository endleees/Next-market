import Image from "next/image"

export default function Card(element:any){
    console.log(element)
    
    return (
        <div>
            <Image src={element.image} alt={element.category}></Image>
        <h3>
            {element.title}
        </h3>

        </div>
        
    )
}