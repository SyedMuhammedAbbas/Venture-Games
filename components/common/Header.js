import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from "../../features/counter/userSlice";
import SearchMobile from "./SearchMobile";
import Profile from "../../images/ceo.png";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const list =
    "hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat cursor-pointer mt-[10px] xl:text-[1.5vw] lg:mt-[0px] tablet:hidden";
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState(" hidden ");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const user = useSelector((state) => state.user.userDetails);
  const token = useSelector((state) => state.user.token);

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
          document.body.style.overflow = "unset";
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
    "merchandise",
  ];
  const pages_heading_links = [
    "shop",
    "giftcards",
    "consoles",
    "games",
    "accessories",
    "merchandise",
  ];

  const footer_links = ["about", "policies", "terms", "help"];
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass(
        "block menu w-[450px] h-auto bg-gradient-to-t from-black to-[#1c1c1c] fixed left-0 ml-[-1px] top-[79.2px] z-[0] shadow-lg border-t-[0.1px] border-gray-900"
      );
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("hidden");
      document.body.style.overflow = "unset";
    }

    setIsMenuClicked(!isMenuClicked);
  };

  function CloseMenu() {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("hidden");
    document.body.style.overflow = "unset";
  }

  function flush() {
    console.log("flush");
    dispatch(SignOut({}));
    localStorage.clear();
    //router.push('/');
    console.log(user);
  }
  const [OpenSearch, setOpenSearch] = useState(false);
  function handleSearch() {
    setOpenSearch(OpenSearch !== true);
  }
  return (
    <>
      <div className="flex p-10 mx-auto common-header h-[120px] justify-center bg-gradient-to-t from-black to-[#2c2c2c] fixed tablet:h-[45px] w-[100%] z-[999]">
        <ul className="flex space-x-[15vw] uppercase text-white text-xl transition-all mb-[-10px] 4xl:text-lg xl:space-x-[10vw] lg:mb-[-20px] ">
          <li className={list}>
            <Link href="/games">
              <a>games</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/consoles">
              <a>consoles</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/accessories">
              <a>accessories</a>
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
        <div className="hidden tablet:block tablet:bg-black tablet:min-h-[140vh] tablet:max-h-[100%] tablet:relative">
          <div className={menu_class} ref={wrapperRef}>
            <div
              className={`flex justify-center pt-10 ${
                token ? "grid space-y-7" : "flex space-y-5"
              }`}
            >
              {!token ? (
                <Link href="/login">
                  <button
                    onClick={CloseMenu}
                    className="text-[#FFB636] flex justify-center items-center capitalize font-semibold bg-transparent h-[50px] w-[150px] border-[1px]  border-[#FFB636] hover:bg-[#FFB636] hover:text-black px-10 py-3 rounded-[15px] text-[20px] mobile:text-[15px]"
                  >
                    login
                  </button>
                </Link>
              ) : (
                <Link href="/settings">
                  <div onClick={CloseMenu} className="flex space-x-3">
                    <img src={Profile.src} className="w-8 h-8"></img>
                    <button className="capitalize text-xl text-white ">
                      {user.FullName}
                    </button>
                  </div>
                </Link>
              )}
              <Link href="/cart">
                <button
                  onClick={CloseMenu}
                  className="text-[#FFB636] flex justify-center items-center capitalize font-semibold bg-transparent h-[50px] w-[150px] border-[1px]  border-[#FFB636] hover:bg-[#FFB636] hover:text-black px-5 py-3 rounded-[15px] text-[20px] mobile:text-[15px]"
                >
                  View Cart
                </button>
              </Link>
            </div>
            <div>
              <ul className="grid uppercase text-white text-lg mobile:text-md transition-all mb-[100px] mt-[20px] overflow-y-auto productTitle">
                {pages_heading.map((pages_heading, index) => (
                  <li
                    key={index}
                    className="hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat py-3 cursor-pointer border-b-[0.1px] border-[#272727] ml-6"
                  >
                    <Link href={`/${pages_heading_links[index]}`}>
                      <a onClick={CloseMenu}>{pages_heading}</a>
                    </Link>
                  </li>
                ))}
                {footer_links.map((footer_links, index) => (
                  <li
                    key={index}
                    className="hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat py-3 cursor-pointer border-b-[0.1px] border-[#272727] ml-6"
                  >
                    <Link href={`/${footer_links}`}>
                      <a onClick={CloseMenu}>{footer_links}</a>
                    </Link>
                  </li>
                ))}
                {token && (
                  <li className="hover:text-[#FFB636]  focus:text-[#FFB636] font-montserrat py-3 cursor-pointer border-b-[0.1px] border-[#272727] ml-6">
                    <Link href="/settings">
                      <a onClick={CloseMenu}>Account</a>
                    </Link>
                  </li>
                )}
                {token && (
                  <li
                    className="hover:text-[#FFB636] mobile:mb-20  focus:text-[#FFB636] font-montserrat py-3 cursor-pointer border-b-[0.1px] border-[#272727] ml-6"
                    onClick={() => {
                      flush();
                    }}
                  >
                    <a onClick={CloseMenu}>Signout</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <Link href="/">
          <a onClick={CloseMenu}>
            <div className="tablet:flex">
              <img
                className="w-28 mx-[10vw] header-img mt-[-25px] 5.1xl:w-24 lg:w-[45px] lg:h-[75px] tablet:w-[50px] tablet:h-[40px] tablet:mt-[-28px] "
                src={logo.src}
              />
            </div>
          </a>
        </Link>

        <div
          onClick={() => handleSearch()}
          className=" hidden tablet:text-[30px] headsearch tablet:text-white tablet:flex tablet:absolute tablet:right-10 tablet:mt-[-20px]"
        >
          <AiOutlineSearch />
        </div>
        <ul className="flex space-x-[15vw] uppercase text-white text-xl transition-all mb-[-10px] 4xl:text-lg xl:space-x-[10vw] lg:mb-[-20px]">
          <li className={list}>
            <Link href="/giftcards">gift cards</Link>
          </li>
          <li className={list}>
            <Link href="/shop" as="/shop">
              <a>shop</a>
            </Link>
          </li>
          <li className={list}>
            <Link href="/merchandise">
              <a>Merchandise</a>
            </Link>
          </li>
        </ul>
      </div>
      {OpenSearch ? <SearchMobile setOpenSearch={setOpenSearch} /> : ""}
    </>
  );
}
