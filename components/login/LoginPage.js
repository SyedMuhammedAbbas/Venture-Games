import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [next, setNext] = useState(false);
  const [Email, setEmail] = useState("");
  function handleNext() {
    if (Email.length === 0) {
      setEmail("");
      setNext(true);
    } else {
      setNext(true);
      setEmail("");
    }
  }
  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')]  bg-no-repeat flex justify-center bg-cover h-auto xl2:h-[100%] p-32 tablet2.1:px-20 mobile2.1:px-10 mobile1:px-5 mobile1.1:px-3 pt-[200px] tablet2.1:pt-[150px] py-[10%] loginmaindivClass">
        <div className="bg-black opacity-75 w-[100%] flex xl2:grid mobile:gap-10 rounded-[40px] p-10 h-[100vh] xl2:h-[137vh] mobile1:h-[110vh] mobile1.1:h-[90vh]">
          <div className="grid xl2:gap-5">
            {next ? (
              <div className="text-[#FFB636] text-[35px] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
                Password
                <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                  <input
                    placeholder="Sarah@venturegames.com"
                    className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                    type="password"
                    required
                  ></input>
                  <button className="text-[35px] text-[#FFB636] align-middle ">
                    <BsArrowRightShort />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-[#FFB636] text-[35px] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
                Enter your email to get started
                <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                  <input
                    placeholder="Sarah@venturegames.com"
                    className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                  ></input>
                  <button
                    onClick={handleNext}
                    className="text-[35px] text-[#FFB636] align-middle "
                  >
                    <BsArrowRightShort />
                  </button>
                </form>
                <div className="text-[#ae1f1f] text-[20px]">
                  This is a required field.
                </div>
              </div>
            )}
            <div className="block absolute xl2:relative bottom-24 xl2:bottom-0">
              <div className="text-[#FFB636] text-[25px] xl2:text-[20px] mobile1.1:text-[15px] pb-2">
                <Link href="">
                  <a>Don't remember one?</a>
                </Link>{" "}
                <span>Sign in with...</span>
              </div>
              <div>
                <button className="bg-white px-20 xl2:px-14 mobile1.1:px-10 py-3 mobile1.1:py-1 opacity-100 rounded-xl text-[35px] xl2:text-[30px] z-10">
                  <FcGoogle />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 items-end text-right text-[100px] tablet2.1:text-[80px] mobile1:text-[60px] mobile1.1:text-[50px] leading-[110px] tablet2.1:leading-[90px] mobile1:leading-[70px] mobile1.1:leading-[60px] font-lemonmilk  xl2:relative right-40 xl2:right-0 text-[#FDD501CF] loginheading">
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
