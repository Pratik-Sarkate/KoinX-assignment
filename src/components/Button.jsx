export default function Button({type, label, fromColor, toColor}){

    return (
        <>
            {type=="gradient" ? <div className={`flex justify-center items-center bg-gradient-to-r ${fromColor} ${toColor} text-white p-2 rounded-md`}>
                {label}
            </div> : null}

            {type=="normal" ? <div className='flex items-center rounded-lg p-2 my-2 gap-2 w-fit text-sm bg-white cursor-pointer hover:bg-slate-100'>
                <div>Check Now</div>
                <svg className="h-4 w-4"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="13" y1="18" x2="19" y2="12" />  <line x1="13" y1="6" x2="19" y2="12" /></svg>
            </div> : null}
        </>
        
    )
}