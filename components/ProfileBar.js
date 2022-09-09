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
import search from "../styles/Search.module.css";
import DropDown from "./DropDown";

export default function ProfileBar({ filter, sethandle, handle }) {
  const icons =
    "text-[30px] 2xl:text-[25px] lg:text-[21px] text-white cursor-pointer";

  const [open, setOpen] = useState(false);

  const onButtonClick = () => {
    {
      handle ? sethandle(false) : sethandle(true);
    }
  };
  return (
    <div className="flex gap-9 2xl:gap-7 mobile:gap-5 fixed w-[100%] justify-end pr-28 2xl:pr-20 lg:pr-14 mobile:pr-7 mt-[140px] 5.1xl:mt-[127px] lg:mt-[91px] tablet:hidden p-3  bg-black bg-opacity-30 backdrop-blur-xl z-[999]">
      {filter == "true" && (
        <div className="flex gap-9 absolute left-20">
          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onButtonClick()}
          >
            <div className={icons}>
              <BsSliders />
            </div>
            <div className="text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
              Filter
            </div>
          </div>

          <div className="flex gap-4">
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

      <div className={icons}>
        <BsHandbag />
      </div>

      <div>
        <div className="inline-flex text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">
          Sufyan
          <div className="text-[34px] 2xl:text-[25px] lg:text-[21px] text-white mt-[9px] lg:mt-[3px]">
            <a className="cursor-pointer">
              <MdKeyboardArrowDown onClick={() => setOpen(!open)} />
            </a>
          </div>
        </div>
      </div>
      {open && <DropDown />}
    </div>
  );
}
