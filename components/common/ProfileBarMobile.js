import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
// import DropDownFilterSort from "./DropDownFilterSort";

export default function ProfileBarMobile({
  handleFilterMobile,
  sethandleFilterMobile,
  handleSortMobile,
  sethandleSortMobile,
}) {
  const [Filter, setFilter] = useState(false);
  const [Sort, setSort] = useState(false);
  function onClickFilter() {
    {
      handleFilterMobile === true
        ? sethandleFilterMobile(false) & sethandleSortMobile(false)
        : sethandleFilterMobile(true) & sethandleSortMobile(false);
    }
  }
  function onClickSort() {
    {
      handleSortMobile === true
        ? sethandleSortMobile(false) & sethandleFilterMobile(false)
        : sethandleSortMobile(true) & sethandleFilterMobile(false);
    }
  }
  const icons = "text-[25px] 2xl:text-[20px] text-white cursor-pointer";
  // console.log(Filter);
  // console.log(Sort);
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
        {/* {Filter ? (
          <DropDownFilterSort
            Filter={Filter}
            Sort={false}
            category={category}
          />
        ) : Sort ? (
          <DropDownFilterSort Filter={false} Sort={Sort} category={category} />
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}
