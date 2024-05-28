export default function OuterContainer({children, bgColor}){

    return (
        <div className={`${bgColor} rounded-md p-6 my-4`}>
            {children}
        </div>
    )
}