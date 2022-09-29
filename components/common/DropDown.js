import { IoIosSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

export default function DropDown() {
  return (
    <>
      <div className="grid w-60  top-[58px] bg-gradient-to-t from-black to-[#2c2c2c] opacity-90 absolute backdrop-blur-[20px] rounded-2xl p-[0rem] overflow-hidden">
        <div className=" h-[58px] text-[#fff] text-[20px] flex items-center py-[2rem] ml-6 border-b-[1px] border-blackOpac hover:bg-[#353535] hover:ml-0 hover:pl-6">
          <a className="cursor-pointer">Account</a>
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
    </>
  );
}
