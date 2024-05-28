import { useEffect, useState } from "react";

export default function CoinHeader({coin, label}){

    const [percentage, setPercentage] = useState(coin.item.data.price_change_percentage_24h.usd)
    const [color, setColor] = useState("red");
    
    useEffect(() => {
        setPercentage(() => coin.item.data.price_change_percentage_24h.usd);
        percentage >= 0 ? setColor(() => "bg-green-100 text-green-600") : setColor(() => "bg-red-100 text-red-600");
    },[]);

    return (
        <div key={coin.item.id} className='flex justify-between items-center gap-2 my-2'>
            <div className='flex justify-center items-center gap-1'>
                <div className='rounded-full h-6 w-6 overflow-hidden'>
                    <img className=' object-fill' src={coin.item.small} alt="" />
                </div>

                <div className='text-sm'>{label=="name" ? coin.item.name : coin.item.symbol}</div>
            </div>
            
            <div className={`flex items-center justify-center text-sm p-1 w-[4.5rem] rounded-md ${color}`}>
                
                {percentage >=0 ?
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd"/>
                    </svg> : 
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                    </svg>
                }
                <div>{(percentage).toFixed(2) + "%"}</div>
            </div>

        </div>
    )
}