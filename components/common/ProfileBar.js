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

export default function ProfileBar({
  filter,
  sethandleFilter,
  handleFilter,
  handleSort,
  sethandleSort,
  cart,
  handleLogin,
  handleSignup,
  sethandleLogin,
  sethandleSignup,
}) {
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

  const onButtonClickSignup = () => {
    {
      handleSignup === true
        ? sethandleSignup(false) & sethandleLogin(false)
        : sethandleSignup(true) & sethandleLogin(false);
    }
  };
  const onButtonClickLogin = () => {
    {
      handleLogin === true
        ? sethandleLogin(false) & sethandleSignup(false)
        : sethandleLogin(true) & sethandleSignup(false);
    }
  };
  return (
    <div className="flex gap-9 2xl:gap-7 mobile:gap-5 fixed w-[100%] mt-[126.5px] lg:mt-[105px] justify-end pr-28 2xl:pr-20 lg:pr-14 mobile:pr-7 tablet:hidden p-3  bg-black bg-opacity-30 backdrop-blur-xl z-[999]">
      {filter == "true" && (
        <div className="flex gap-9 absolute left-20">
          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onButtonClickFilter()}
          >
            <div className={icons}>
              <BsSliders />
            </div>
            <div className="text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
              Filter
            </div>
          </div>

          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onButtonClickSort()}
          >
            <div className={icons}>
              <BsSortDown />
            </div>
            <div className="text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
              Sort
            </div>
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
          ></input>
          <button className={`${icons} ${search.search_submit}`} type="submit">
            <BsSearch />
          </button>
        </form>
      </div>

      {cart && (
        <div className={icons}>
          <Link href="/cart">
            <a>
              <BsHandbag />
            </a>
          </Link>
        </div>
      )}

      {handleLogin ? (
        <button
          onClick={() => onButtonClickSignup()}
          className="border-[1px] border-white text-white hover:bg-white hover:text-black hover:border-black text-[25px] rounded-lg px-3"
        >
          <Link href="signup">
            <a className="">signup</a>
          </Link>
        </button>
      ) : handleSignup ? (
        <button
          onClick={() => onButtonClickLogin()}
          className="border-[1px] border-white text-white hover:bg-white hover:text-black hover:border-black text-[25px] rounded-lg px-3"
        >
          <Link href="login">
            <a className="">login</a>
          </Link>
        </button>
      ) : (
        <div className="flex gap-5">
          <button
            onClick={() => onButtonClickLogin()}
            className="border-[1px] border-white text-white hover:bg-white hover:text-black hover:border-black text-[25px] rounded-lg px-3"
          >
            <Link href="login">
              <a className="">login</a>
            </Link>
          </button>
          <button
            onClick={() => onButtonClickSignup()}
            className="border-[1px] border-white text-white hover:bg-white hover:text-black hover:border-black text-[25px] rounded-lg px-3"
          >
            <Link href="signup">
              <a className="">signup</a>
            </Link>
          </button>
        </div>
      )}

      {/* <div>
        <div className="inline-flex text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
          Sufyan
          <div className="text-[34px] 2xl:text-[25px] lg:text-[21px] text-white mt-[9px] lg:mt-[3px]">
            <a className="cursor-pointer">
              <MdKeyboardArrowDown onClick={() => setOpen(!open)} />
            </a>
          </div>
        </div>
      </div> */}
      {open && <DropDown />}
    </div>
  );
}
