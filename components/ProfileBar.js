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

export default function ProfileBar({ filter, sethandle, handle }) {
  const icons =
    "text-[30px] 2xl:text-[25px] lg:text-[21px] text-white cursor-pointer";

  const [open, setOpen] = useState(false);

  const onButtonClick = () => {
    {
      handle == true ? sethandle(false) : sethandle(true);
    }
  };
  return (
    <div className="flex gap-9 2xl:gap-7 mobile:gap-5 fixed w-[100%] justify-end pr-28 2xl:pr-20 lg:pr-14 mobile:pr-7 mt-[140px] 2xl:mt-[127px] lg:mt-[91px] tablet:hidden p-3  bg-black bg-opacity-30 backdrop-blur-xl z-[999]">
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

      {/* <div>
        <form className="search-box">
          <input type="text" placeholder=" " />
          <button type="reset"></button>
        </form>
      </div> */}

      <div className={search.wrap}>
        <form action="" autoComplete="on">
          <input
            className={search.search}
            name="search"
            type="text"
            placeholder="What're we looking for ?"
          ></input>
          {/* <input id="search_submit" value="Rechercher" type="submit" /> */}
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
      {open && (
        <div className="grid w-60  top-[58px] bg-gradient-to-t from-black to-[#2c2c2c] opacity-90 absolute backdrop-blur-[20px] rounded-2xl p-[0rem] overflow-hidden">
          <div className=" h-[58px] text-[#fff] text-[20px] flex items-center py-[2rem] ml-6 border-b-[1px] border-blackOpac hover:bg-[#353535] hover:ml-0 hover:pl-6">
            <a className="cursor-pointer">Settings</a>
            <div className="text-white text-[25px] absolute right-6">
              <IoIosSettings />
            </div>
          </div>
          <div className="h-[58px] text-[#fff] text-[20px] flex items-center py-[2rem] ml-6 border-b-[1px] border-blackOpac hover:bg-[#353535] hover:ml-0 hover:pl-6">
            <a className="cursor-pointer">Help</a>
            <div className="text-white text-[25px] absolute right-6">
              <IoIosHelpCircle />
            </div>
          </div>
          <div className="h-[58px] text-[#fff] text-[20px] flex items-center py-[2rem] ml-6 hover:bg-[#353535] hover:ml-0 hover:pl-6">
            <a className="cursor-pointer">Sign Out</a>
            <div className="text-white text-[24px] absolute right-6">
              <FaSignOutAlt />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
