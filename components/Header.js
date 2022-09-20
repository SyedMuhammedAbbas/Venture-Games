import logo from "../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import ProfileBar from "./ProfileBar";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const list =
    "hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat cursor-pointer mt-[10px] xl:text-[1.5vw] lg:mt-[0px] tablet:hidden";
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState(" hidden ");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setBurgerClass("burger-bar unclicked");
          setMenuClass("hidden");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  const pages_heading = [
    "shop",
    "gift cards",
    "consoles",
    "games",
    "accessories",
    "learn more",
  ];
  const pages_heading_links = [
    "shop",
    "consoles",
    "consoles",
    "consoles",
    "accessories",
    "learnmore",
  ];

  const footer_links = ["about", "policies", "terms", "help"];
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass(
        "block menu overflow-y-scroll desp-scroll overflow-x-hidden w-[350px] h-[125vh] bg-gradient-to-t from-black to-[#1c1c1c] fixed left-0 ml-[-1px] top-[79.2px] z-[0] shadow-lg border-t-[0.1px] border-gray-900"
      );
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  function CloseMenu() {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("hidden");
  }
  return (
    <>
      <div className="flex p-10 mx-auto justify-center bg-gradient-to-t from-black to-[#2c2c2c] fixed tablet:h-[45px] w-[100%] z-[999]">
        <ul className="flex gap-[8vw] uppercase text-white text-xl transition-all mb-[-10px] 4xl:text-lg xl:gap-[7vw] lg:mb-[-20px] ">
          <li className={list}>
            <Link href="/shop">
              <a>shop</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/shop">
              <a>gift cards</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/consoles">
              <a>consoles</a>
            </Link>
          </li>
        </ul>
        <div
          className="tablet:space-y-[6px] hidden tablet:grid tablet:absolute tablet:left-10 tablet:mt-[-15px]"
          onClick={updateMenu}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className="hidden tablet:block">
          <div className={menu_class} ref={wrapperRef}>
            <ul className="grid uppercase text-white text-xl transition-all overflow-y-scroll desp-scroll">
              {pages_heading.map((pages_heading, index) => (
                <li
                  key={index}
                  className="hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat cursor-pointer py-3 border-b-[0.1px] border-blackOpac ml-6"
                >
                  <Link href={`/${pages_heading_links[index]}`}>
                    <a onClick={CloseMenu}>{pages_heading}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="grid uppercase text-white text-xl transition-all overflow-y-scroll desp-scroll">
              {footer_links.map((footer_links, index) => (
                <li
                  key={index}
                  className="hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat cursor-pointer py-3 border-b-[0.1px] border-blackOpac ml-6"
                >
                  <Link href={`/${footer_links}`}>
                    <a onClick={CloseMenu}>{footer_links}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/">
          <a onClick={CloseMenu}>
            <img
              className="w-28 mx-[10vw] header-img mt-[-25px] 5.1xl:w-24 lg:w-[45px] lg:h-[75px] tablet:w-[55px] tablet:h-[45px] tablet:mt-[-28px] "
              src={logo.src}
            />
          </a>
        </Link>

        <div className=" hidden tablet:text-[30px] headsearch tablet:text-white tablet:flex tablet:absolute tablet:right-10 tablet:mt-[-20px]">
          <AiOutlineSearch />
        </div>
        <ul className="flex gap-[8vw] uppercase text-white text-xl transition-all mb-[-10px] 4xl:text-lg xl:gap-[7vw] lg:mb-[-20px]">
          <li className={list}>games</li>
          <li className={list}>
            <Link href="login">
              <a>accessories</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/learnmore">
              <a>learn more</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
