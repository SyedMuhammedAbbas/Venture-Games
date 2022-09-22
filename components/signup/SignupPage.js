import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SignupPage() {
  const [gender, setGender] = useState();
  const [startDate, setStartDate] = useState(new Date());
  var nextBirthday = require("next-birthday");
  var birthday = new Date(1990, 5, 1);
  // handles selection change
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };
  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')] bg-[length:100%_100%] bg-no-repeat flex justify-center h-auto xl2:h-[100%] p-32 tablet2.1:px-20 mobile2.1:px-10 mobile1:px-5 mobile1.1:px-3 pt-[200px] tablet2.1:pt-[150px] pb-14 loginmaindivClass">
        <div className="bg-black opacity-75 w-[100%] flex xl2:grid mobile:gap-10 rounded-[40px] p-10 h-[100vh] xl2:h-[100vh] mobile1:h-[110vh] mobile1.1:h-[100vh]">
          <div className="grid gap-0 justify-center">
            <div className="flex gap-10 tablet1:grid tablet1:gap-0">
              <div className="text-[#FFB636] text-[30px] mobile1:text-[25px] mobile1.1:text-[20px]">
                Full Name
                <form className="opacity-100 border-b-[2px] w-[350px] mobile1:w-auto flex border-[#FFB636]">
                  <input
                    placeholder="Sarah Ali"
                    className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  ></input>
                </form>
              </div>
              <div className="text-[#FFB636] text-[30px] mobile1:text-[25px] mobile1.1:text-[20px]">
                Email
                <form className="opacity-100 border-b-[2px] xl2:w-[350px] mobile1:w-auto flex border-[#FFB636]">
                  <input
                    placeholder="Sarah@venturegames.com"
                    className="bg-transparent text-[#FFB636] placeholder:text-[#78694f] mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  ></input>
                </form>
              </div>
            </div>
            <div className="mt-[0%] flex gap-40 tablet1:grid tablet1:gap-0">
              <div className="text-[#FFB636] text-[30px] mobile1:text-[25px] mobile1.1:text-[20px]">
                Gender
                <form className="opacity-100   mobile1:w-auto flex gap-5 text-[25px] text-[#947927] ">
                  <input
                    type="radio"
                    value="male"
                    checked={gender == "male"}
                    onChange={handleChange}
                    className="text-[15px] text-[#5b4a18]"
                  />
                  <span>Male</span>
                  <input
                    type="radio"
                    value="female"
                    checked={gender == "female"}
                    onChange={handleChange}
                    className="text-[15px] text-[#5b4a18]"
                  />
                  <span>Female</span>
                </form>
              </div>
              <div className="text-[#FFB636] text-[30px] mobile1:text-[25px] mobile1.1:text-[20px]">
                Date of Birth
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="bg-transparent border-[4px] border-opacity-70 rounded-xl border-[#FFB636] z-[999] text-center"
                />
                {/* {nextBirthday.get(birthday)} */}
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 xl2:bottom-0 xl:hidden xl2:mb-[-150px] mobile1:mb-0 mobile1:bottom-20 items-end text-right text-[100px] tablet2.1:text-[80px] mobile1:text-[60px] mobile1.1:text-[50px] leading-[110px] tablet2.1:leading-[90px] mobile1:leading-[70px] mobile1.1:leading-[60px] font-lemonmilk opacity-30  right-40 tablet2.1:right-24 mobile1:right-10 text-[#FDD501CF]">
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
