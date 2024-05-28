import CoinHeader from "./CoinHeader";

export default function MiniChart({coin}){

    return (
        <div className='flex flex-col py-2 px-4 gap-2 min-w-[15rem] border border-slate-200 rounded-md shadow-md'>
            <div className="w-fit">
                <CoinHeader coin={coin} label={"symbol"}/>
            </div>

            <div className="text-lg font-medium">{coin.item.data.price}</div>
            <div className='flex justify-center'>
                <img className='w-[10rem]' src={coin.item.data.sparkline} alt="" />
            </div>
        </div>
    )
}