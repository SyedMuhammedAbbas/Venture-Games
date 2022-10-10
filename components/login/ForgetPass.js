import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import axios from 'axios';
import Link  from 'next/link';
import { useRouter } from "next/router";

export default function ForgetPass() {
  const router = useRouter();
  const [OTP, setOTP] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function resetPassword(e) {
    e.preventDefault();
    console.log(OTP);
    console.log(password);
    try {
      if(password == newPassword) {
        let response = await axios.post("https://api.venturegames.pk/ResetPassword", {
        NewPassword: password,
        resetPasswordToken: OTP
      });
      if(response.data == 'Password Resetted') {
        router.push('/login');
      }
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')]  bg-no-repeat flex justify-center bg-cover h-auto xl2:h-[100%] p-32 tablet2.1:px-20 mobile2.1:px-10 mobile1:px-5 mobile1.1:px-3 pt-[200px] tablet2.1:pt-[150px] py-[10%] loginmaindivClass">
        <div className="bg-black opacity-75 w-[100%] relative flex xl2:grid mobile:gap-10 rounded-[40px] p-10 min-h-[100vh] max-h-[100%] ">
          <div className="grid xl2:gap-5">
            <div className="text-[#FFB636] text-[35px] mobile1:text-[25px] mobile1.1:text-[20px] mt-[5%] xl2:mt-[5%] loginheading1">
              OTP
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  type="text"
                  onChange={(e) => {setOTP(e.target.value)}}
                  value={OTP}
                  required
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Password
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  placeholder="password"
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  type="password"
                  onChange={(e) => {setPassword(e.target.value)}}
                  value={password}
                  required
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Confirm Password
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-auto flex border-[#FFB636]">
                <input
                  placeholder="confirm password"
                  className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  type="Password"
                  onChange={(e) => {setNewPassword(e.target.value)}}
                  value={newPassword}
                  required
                ></input>
              </form>
            </div>
            <div>         
              <button 
                className="mt-[5%] float-right text-[30px] flex items-center text-[#FFB636] align-middle "
                onClick={(e) => {resetPassword(e)}}>
                next
                <BsArrowRightShort/>
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 items-end text-right text-[100px] tablet2.1:text-[80px] mobile1:text-[60px] mobile1.1:text-[50px] leading-[110px] tablet2.1:leading-[90px] mobile1:leading-[70px] mobile1.1:leading-[60px] font-lemonmilk  xl2:relative right-20 xl2:right-0 text-[#FDD501CF] loginheading">
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
