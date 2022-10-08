import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')]  bg-no-repeat flex justify-center bg-cover h-auto xl2:h-[100%] p-32 tablet2.1:px-20 mobile2.1:px-10 mobile1:px-5 mobile1.1:px-3 pt-[200px] tablet2.1:pt-[150px] py-[10%] loginmaindivClass">
        <div className="bg-black relative opacity-75 w-[100%] flex xl2:grid mobile:gap-10 rounded-[40px] p-10 h-full">
          <div className="grid xl2:gap-5">
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-auto mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Full Name
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  placeholder="Sarah Ali"
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-auto mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Email
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  placeholder="Sarah@venturegames.com"
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-auto mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Password
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  placeholder="password"
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-auto mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Contact No.
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  placeholder="contact"
                  type="tel"
                  pattern="[0-9]{4}-[0-9]{7}"
                  className="bg-transparent text-[#FFB636]
                  placeholder:text-[#78694f] mobile1:w-[350px]
                  placeholder:opacity-90 placeholder:text-[25px]
                  mobile1.1:placeholder:text-[15px]"
                ></input>
              </form>
            </div>
            <div>
              <button className="mt-[5%] float-right text-[30px] flex items-center text-[#FFB636] align-middle ">
                next
                <BsArrowRightShort />
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 items-end text-right text-[140px] tablet2.1:text-[80px] mobile1:text-[60px] mobile1.1:text-[50px] leading-[130px] tablet2.1:leading-[90px] mobile1:leading-[70px] mobile1.1:leading-[60px] font-lemonmilk  xl2:relative right-20 xl2:right-0 text-[#FDD501CF] loginheading">
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
