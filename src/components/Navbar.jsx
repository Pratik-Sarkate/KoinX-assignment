import koinxLogo from '../assets/koinx-logo.svg'
import Button from './Button'

export default function Navbar(){

    return (
        <div className="flex justify-between px-10 py-1 bg-white shadow-md fixed w-screen">
            <div className=''>
                <img className="w-[80px] h-[60px]" src={koinxLogo} alt="" />
            </div>

            <div className="flex justify-between items-center gap-6 font-medium text-sm">
                <div className="">Crypto Taxes</div>
                <div className="">Free Tools</div>
                <div className="">Resource Center</div>
                <div className="">
                    <Button label={"Get Started"} type={"gradient"} fromColor={"from-[#2871EB]"} toColor={"to-[#1B4AEF]"}/>
                </div>
            </div>
        </div>
    )
}