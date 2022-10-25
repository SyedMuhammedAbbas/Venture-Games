import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import DropDownFilterSort from "./DropDownFilterSort";

export default function ProfileBarMobile() {
  const [Filter, setFilter] = useState(false);
  const [Sort, setSort] = useState(false);
  function onClickFilter() {
    if (Filter) {
      setFilter(false) & setSort(false);
    } else if (Sort) {
      setFilter(true) & setSort(false);
    } else {
      setFilter(true) & setSort(true);
    }
  }
  function onClickSort() {
    if (Sort) {
      setSort(false) & setFilter(false);
    } else if (Filter) {
      setSort(true) & setFilter(false);
    } else {
      setSort(true) & setFilter(false);
    }
  }
  const icons = "text-[25px] 2xl:text-[20px] text-white cursor-pointer";
  console.log(Filter);
  console.log(Sort);
  return (
    <>
      <div className=" tablet:flex tablet:items-center tablet:py-5 tablet:gap-9 tablet:2xl:gap-7 mobile:gap-5 tablet:fixed tablet:w-[100%] tablet:justify-end tablet:pr-10   tablet:p-3  tablet:bg-black tablet:bg-opacity-30 tablet:backdrop-blur-xl tablet:z-[999]">
        <div className="flex gap-9 absolute right-10">
          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onClickFilter()}
          >
            <div className={icons}>
              <BsSliders />
            </div>
            <button className="text-[25px] 2xl:text-[20px] text-white mt-[-7px] lg:mt-[-5px]">
              Filter
            </button>
          </div>

          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => onClickSort()}
          >
            <div className={icons}>
              <BsSortDown />
            </div>
            <button className="text-[25px] 2xl:text-[20px] text-white mt-[-7px] lg:mt-[-5px]">
              Sort
            </button>
          </div>
        </div>
        {/* <DropDownFilterSort handleFilter={handleFilter} /> */}
        {Filter ? (
          <DropDownFilterSort Filter={Filter} Sort={false} />
        ) : Sort ? (
          <DropDownFilterSort Filter={false} Sort={Sort} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
