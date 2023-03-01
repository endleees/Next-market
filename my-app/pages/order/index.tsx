import { useSelector } from "react-redux";
import  MainLayout  from "../components/header/main-layout/mainLayout";
import Cards from "../components/cards/cards";
import { useEffect, useState } from "react";


export default function Order() {
    let data:any= useSelector((state):any => state?.cart)

    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
      setShowChild(true);
    }, []);

    if (!showChild) {
      return null;
    }

    if (typeof window === 'undefined') {
      return <div>Ваша корзина пуста</div>;
    } else {
    
        return (
            <MainLayout>
                <Cards cardsList={data.items}>

            </Cards>
            </MainLayout>

        )
    }
}