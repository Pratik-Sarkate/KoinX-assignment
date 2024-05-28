export default function EventCard({card}){

    return (
        <div className={`bg-[${card.bgColor}] min-w-[400px] h-fit flex p-2 rounded-md`}>
            <img  className="h-20" src={card.imgSrc} alt="" />
            <div>
                <div className='font-semibold text-sm'>{card.heading}</div>
                <div className='opacity-50 text-sm'>{card.paragraph}</div>
            </div>
        </div>
    )
}