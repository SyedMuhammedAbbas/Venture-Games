import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";

export default function ProfileBarMobile() {
  return (
    <>
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
    </>
  );
}
