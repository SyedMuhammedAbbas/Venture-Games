import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')] bg-[length:100%_100%] bg-no-repeat flex justify-center h-[125vh] p-32 pt-[200px] pb-14">
        <div className="bg-black opacity-75 w-[100%] flex rounded-[40px] p-10">
          <div className="grid">
            <div className="text-[#FFB636] text-[35px] mt-[15%]">
              Enter your email to get started
              <form className="border-b-[2px] border-[#FFB636]">
                <input
                  placeholder="Sarah@venturegames.com"
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] placeholder:opacity-90 placeholder:text-[25px]"
                ></input>
                <button className="text-[35px] text-[#FFB636] align-middle ">
                  <BsArrowRightShort />
                </button>
              </form>
            </div>

            <div className="block absolute bottom-36">
              <div className="text-[#FFB636] text-[25px] pb-2">
                <Link href="">
                  <a>Don't remember one?</a>
                </Link>{" "}
                <span>Sign in with...</span>
              </div>
              <div>
                <button className="bg-white px-20 py-3 opacity-100 rounded-xl text-[35px] z-10">
                  <FcGoogle />
                </button>
              </div>
            </div>
          </div>
          <div className="text-right text-[100px] leading-[110px] font-lemonmilk absolute right-40 text-[#FDD501CF]">
            Find
            <br />
            Your
            <br />
            Gaming
            <br />
            Thirst
            <br />
            Quenched
          </div>
        </div>
      </div>
    </>
  );
}
