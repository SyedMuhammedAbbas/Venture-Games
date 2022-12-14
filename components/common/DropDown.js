import { IoIosSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../features/counter/userSlice";
import { useRouter } from "next/router";
import { clearInformation } from "../../features/counter/checkoutSlice";
import { clearCart } from "../../features/counter/cartSlice";

export default function DropDown({ setOp }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  const router = useRouter();

  function flush() {
    console.log("flush");
    dispatch(SignOut({}));
    dispatch(clearInformation());
    dispatch(clearCart());
    localStorage.clear();
    setOp(false);
    router.push("/");
  }

  return (
    <>
      <div className="grid w-60  top-[60px] bg-gradient-to-t from-black to-[#2c2c2c] opacity-95 absolute backdrop-blur-[20px] rounded-2xl p-[0rem] overflow-hidden">
        <Link href="/settings">
          <div className=" h-[58px] text-[#fff] cursor-pointer text-[20px] flex items-center py-[2rem] ml-6 border-b-[1px] border-blackOpac hover:bg-[#353535] hover:ml-0 hover:pl-6">
            <button className="cursor-pointer">Account</button>

            <div className="text-white text-[25px] absolute right-6">
              <IoIosSettings />
            </div>
          </div>
        </Link>

        <Link href="/help">
          <div className="h-[58px] text-[#fff] cursor-pointer text-[20px] flex items-center py-[2rem] ml-6 border-b-[1px] border-blackOpac hover:bg-[#353535] hover:ml-0 hover:pl-6">
            <button className="cursor-pointer">Help</button>

            <div className="text-white text-[25px] absolute right-6">
              <IoIosHelpCircle />
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            onClick={() => {
              flush();
            }}
            className="h-[58px] text-[#fff] cursor-pointer text-[20px] flex items-center py-[2rem] ml-6 hover:bg-[#353535] hover:ml-0 hover:pl-6"
          >
            <button className="cursor-pointer">Sign Out</button>
            <div className="text-white text-[24px] absolute right-6">
              <FaSignOutAlt />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
