/* 

content: {
    heading: "heading",
    subContent: [
        {
            subheading: "axy"
            subcontent: "content"
        },
        
    ]

}

*/

export default function ComponentContent({content}) {
    return (
        <div className="">
            <div className='text-xl font-medium'>{content.heading}</div>
            {content.subContent? content.subContent.map(item => {
                return (
                    <>
                        {item.subHeading ? <div className="my-4 font-medium text-md">{item.subHeading}</div>: null}
                        {item.imgSrc ? <img src={item.imgSrc} alt="" /> : null}
                        <div className="my-2 text-sm text-slate-800">{item.subText}</div>
                    </>
                )
            }) : null}
        </div>
    )
}
