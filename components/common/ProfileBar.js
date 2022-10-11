import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import search from "../../styles/Search.module.css";
import DropDown from "./DropDown";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export default function ProfileBar({
  filter,
  sethandleFilter,
  handleFilter,
  handleSort,
  sethandleSort,
  cartshow,
  handleLogin,
  handleSignup,
  sethandleLogin,
  sethandleSignup,
}) {
  const [token, setToken] = useState();
  const [searchResult, setSearchResult] = useState();
  useEffect(() => {
    let tok = JSON.parse(localStorage.getItem("token"));
    console.log(tok); 
    setToken(tok);
  }, [])
  const cartItem = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.userDetails);
  const userToken = useSelector((state) => state.user.token);
  // console.log(token);
  console.log(user);
  const icons =
    "text-[30px] 2xl:text-[25px] lg:text-[21px] text-white cursor-pointer";

  const [open, setOpen] = useState(false);

  const onButtonClickFilter = () => {
    {
      handleFilter === true
        ? sethandleFilter(false) & sethandleSort(false)
        : sethandleFilter(true) & sethandleSort(false);
    }
  };
  const onButtonClickSort = () => {
    {
      handleSort === true
        ? sethandleSort(false) & sethandleFilter(false)
        : sethandleSort(true) & sethandleFilter(false);
    }
  };

  async function getProducts(e) {
    e.preventDefault();
    // let response = await axios.get("https://api.venturegames.pk/Products", {
    //   params: {
    //     Title: title
    //   }
    // })

    // console.log(response);
    console.log("Search")
  }

  // console.log(userToken);

  return (
    <div className="flex items-center gap-9 2xl:gap-7 mobile:gap-5 fixed w-[100%] justify-end pr-28 2xl:pr-20 lg:pr-14 mobile:pr-7 tablet:hidden p-3  bg-black bg-opacity-30 backdrop-blur-xl z-[999]">
      {filter == "true" && (
        <div className="flex gap-9 absolute left-20">
          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onButtonClickFilter()}
          >
            <div className={icons}>
              <BsSliders />
            </div>
            <button className="text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
              Filter
            </button>
          </div>

          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onButtonClickSort()}
          >
            <div className={icons}>
              <BsSortDown />
            </div>
            <button className="text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
              Sort
            </button>
          </div>
        </div>
      )}

      <div className={search.wrap}>
        <form action="" autoComplete="on">
          <input
            className={search.search}
            name="search"
            type="text"
            placeholder="What're we looking for ?"
            value={searchResult}
            onChange={(e) => {setSearchResult(e.target.value)}}
          ></input>
          {!searchResult ? <button className={`${icons} ${search.search_submit}`} type="submit" >
            <BsSearch /> 
          </button>:
          <button >
            <MdKeyboardArrowDown onClick={(e) => {getProducts(e)}} /> 
          </button>}
        </form>
      </div>

      {cartshow && (
        <div className={icons}>
          <Link
            href={{
              pathname: "/cart",
            }}
          >
            <a>
              <button>
                <BsHandbag />
                <div class=" mt-[-10px] mr-20 pt-[3.5px] absolute z-10 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-[#000000] rounded-full ">
                  {Object.values(cartItem).length}
                </div>
              </button>
            </a>
          </Link>
        </div>
      )}
      <div className="flex gap-5">
        <button className="border-[1px] border-white hover:bg-[#FFB636] text-white  hover:text-black hover:border-[#FFB636] text-[25px] rounded-lg px-3">
          <Link href="login">
            <a className="">login</a>
          </Link>
        </button>
      </div>

      <div className="flex items-center text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
        {user.FullName}
        <div className="text-[34px] 2xl:text-[25px] lg:text-[21px] text-white mt-[9px] lg:mt-[3px]">
          <a className="cursor-pointer">
            <MdKeyboardArrowDown onClick={() => setOpen(!open)} />
          </a>
        </div>
      </div>
      {open && <DropDown />}
    </div>
  );
}
