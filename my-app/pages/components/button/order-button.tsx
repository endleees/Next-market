// @flow
import * as React from 'react';
import dynamic from "next/dynamic";



function OrderButton ({className,text,onClick}:any) {
    return (
        <button onClick={onClick} className={className}>
            {text? text : 'В корзину'}
        </button>
    );
}

export default dynamic(()=>Promise.resolve(OrderButton), {ssr: false})