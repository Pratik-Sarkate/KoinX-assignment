import Button from "./Button";

export default function GradientBgCard({fromColor, toColor, heading, imgSrc}){

    return (
        <div className={`flex items-center px-2 my-2 gap-4 w-[20rem] rounded-md bg-gradient-to-br ${fromColor} ${toColor}`}>
            <div className='flex justify-center items-center h-32 w-32'>
                <img className='rounded-md object-fill' src={imgSrc} alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='text-white text-xl'>{heading}</div>
                <Button label={"Check Now"} type={"normal"}/>
            </div>
        </div>
    )
}