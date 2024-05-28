export default function TeamProfile({name, designation, imgSrc}){
    return (
        <div className="flex gap-4 p-4 bg-[#E8F5FC] rounded-md my-4">
            <div className="flex flex-col items-center text-center">
                {/* <div className="rounded-md h-[100px] w-[100px]"> */}
                {/* </div> */}
                <img className="rounded-md w-[200px]" src={imgSrc} alt="" />
                <div className="font-semibold text-md">{name}</div>
                <div className="text-sm text-slate-800 opacity-70">{designation}</div>
            </div>

            <div className="flex justify-center items-center">
                <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum distinctio inventore beatae aspernatur cum neque qui quidem minus, non sapiente recusandae, quibusdam sunt accusantium nemo unde deserunt totam amet in perferendis debitis. Porro dolor nihil velit excepturi, distinctio veniam, nostrum ad necessitatibus officiis ipsa rerum commodi sed? Unde, accusamus nemo!</div>
            </div>
        </div>
    )
}