import logo from "../images/logo.png"
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header() {
    const list = "hover:text-[#FFB636]  focus:text-[#FFB636] cursor-pointer mt-[10px] xl:text-[1.5vw] lg:mt-[0px] tablet:hidden"

    return (
        <>
            <div className="flex p-10 mx-auto justify-center bg-gradient-to-t from-black to-[#2c2c2c] fixed w-[100%] z-[999]">
                <ul className="flex gap-[8vw] uppercase text-white text-xl transition-all mb-[-10px] 4xl:text-lg xl:gap-[7vw] lg:mb-[-20px] ">
                    <li className={list}>
                        shop
                    </li>
                    <li className={list}>
                        gift cards
                    </li>
                    <li className={list}>
                        consoles
                    </li>

                    <div className="tablet:space-y-2 hidden tablet:grid tablet:absolute tablet:left-10 tablet:mt-[-15px]">
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                    </div>

                    <img className="w-28 mt-[-25px] 2xl:w-24 lg:w-[70px] lg:h-14 tablet:w-[55px] tablet:h-[50px] tablet:mt-[-28px] " src={logo.src} />
                    
                    <div className=" hidden tablet:text-[35px] tablet:text-white tablet:flex tablet:absolute tablet:right-10 tablet:mt-[-20px]"><AiOutlineSearch /></div>
                    
                    <li className={list}>
                        games
                    </li>
                    <li className={list}>
                        accessories
                    </li>
                    <li className={list}>
                        contact
                    </li>
                </ul>

                
            </div>
        </>
    )
}