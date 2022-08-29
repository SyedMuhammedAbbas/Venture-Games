export default function Footer(){
    return(
        <div className="flex text-[30px] 4xl:text-[2vw] tablet2.1:text-[16px] mobile:justify-center h-[80px] tablet:h-[60px] pt-5 bg-gradient-to-t from-[#1e1e1e] to-black text-white">

            <ul className="flex gap-[20px] pl-7 mobile:hidden">
                <li className="flex no-underline">About.</li>
                <li className="flex no-underline">Policies.</li>
                <li className="flex no-underline">Terms.</li>
                <li className="flex no-underline">Help.</li>
            </ul>

            <div className="absolute right-[2%] mobile:relative">All rights reserved. Venture Games.2022</div>
        </div>
    )
}
