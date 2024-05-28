import { useEffect, useRef, useState } from "react";

export function ScrollCards({cardWidth, children}){
    const [scrollPosition, setScrollPosition] = useState(0);

    const scroller = useRef();

    useEffect(() => {
		// console.log("position", scrollPosition);
		scroller.current.scrollLeft = scrollPosition;

	},[scrollPosition])

    return (
        <div className='relative flex items-center'>

            {/* Cards */}
            <div className='flex gap-4 overflow-x-scroll no-scrollbar' ref={scroller} onScroll={(e) => {
                    const { scrollLeft } = e.target;
                    const position = scrollLeft;
                    setScrollPosition(position);
                }}>
                
                {children}                    
            </div>

            {/* Right scrolling button */}
            <div onClick={(e) => {
                    const newScrollPosition = Math.min(Math.floor((scrollPosition + cardWidth)/cardWidth) * cardWidth, scroller.current.scrollWidth - scroller.current.offsetWidth);
                    setScrollPosition(newScrollPosition);
                    // console.log("position", newScrollPosition);
                }}>
                <div className='bg-white rounded-full w-10 h-10 absolute right-0 flex justify-center items-center text-slate-500 shadow-md cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}