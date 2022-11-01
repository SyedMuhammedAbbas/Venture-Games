import { MdOutlineCancel } from "react-icons/md";
import SearchDropDown from "./SearchDropDown";

export default function SearchMobile({ setOpenSearch }) {
  function handleCloseSearch() {
    setOpenSearch(false);
  }
  return (
    <>
      <div className="hidden tablet:bg-black tablet:opacity-95 tablet:min-h-[200vh] tablet:max-h-[100%] tablet:w-[100%] tablet:z-[99999] tablet:grid tablet:justify-center tablet:fixed">
        <div
          onClick={() => handleCloseSearch()}
          className="flex absolute right-10 top-5 text-[#805712] text-[40px]"
        >
          <MdOutlineCancel />
        </div>
        <form className="h-[60px] w-[500px] mobile:w-[100%]] mobile:px-10 pt-[20%] opacity-100 bg-opacity-100">
          <input
            className="h-[60px] w-[500px] pl-2 placeholder:text-[20px] placeholder:text-[#a57a2f] placeholder:font-bold mobile:w-[100%] border-[4px] border-[#805712] rounded-lg bg-blackOpac opacity-100 z-[9999]"
            placeholder="Search Venturegames"
          ></input>
        </form>
      </div>
    </>
  );
}
