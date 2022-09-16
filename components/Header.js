import logo from "../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import ProfileBar from "./ProfileBar";
import React, { useState } from "react";

export default function Header() {
  const list =
    "hover:text-[#FFB636]  focus:text-[#FFB636] cursor-pointer mt-[10px] xl:text-[1.5vw] lg:mt-[0px] tablet:hidden";
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState(" hidden ");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass(
        "block menu overflow-y-scroll overflow-x-hidden w-[350px] h-[125vh] bg-gradient-to-t from-black to-[#1c1c1c] fixed left-0 ml-[-1px] top-[82.5px] z-[0] shadow-lg border-t-[0.1px] border-gray-900"
      );
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <>
      <div className="flex p-10 mx-auto justify-center bg-gradient-to-t from-black to-[#2c2c2c] fixed w-[100%] z-[999]">
        <ul className="flex gap-[8vw] uppercase text-white text-xl transition-all mb-[-10px] 4xl:text-lg xl:gap-[7vw] lg:mb-[-20px] ">
          <li className={list}>
            <Link href="/shop">
              <a>shop</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/learnmore">
              <a>gift cards</a>
            </Link>
          </li>
          <li className={list}>consoles</li>

          <div
            className="tablet:space-y-[6px] hidden tablet:grid tablet:absolute tablet:left-10 tablet:mt-[-15px]"
            onClick={updateMenu}
          >
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div className="hidden tablet:block">
            <div className={menu_class}></div>
          </div>

          <Link href="/">
            <a>
              <img
                className="w-28 mt-[-25px] 5.1xl:w-24 lg:w-[70px] lg:h-[70px] tablet:w-[55px] tablet:h-[50px] tablet:mt-[-28px] "
                src={logo.src}
              />
            </a>
          </Link>

          <div className=" hidden tablet:text-[30px] tablet:text-white tablet:flex tablet:absolute tablet:right-10 tablet:mt-[-20px]">
            <AiOutlineSearch />
          </div>

          <li className={list}>games</li>
          <li className={list}>accessories</li>
          <li className={list}>contact</li>
        </ul>
      </div>
    </>
  );
}
