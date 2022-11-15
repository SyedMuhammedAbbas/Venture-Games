import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../features/counter/userSlice";

export default function SignupPage({ data }) {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Contact, setContact] = useState("");
  const router = useRouter();
  const user = useSelector((state) => state.user.userDetails);

  async function handleSignUp() {
    try {
      let response = await axios.post("https://api.venturegames.pk/SignUp", {
        FullName: fullName,
        EmailAddress: Email,
        ContactNumber: Contact,
        Password: Password,
      });

      console.log(response.data.user);
      console.log(response);
      if (response.data.user.isVerified == false) {
        localStorage.setItem("token", JSON.stringify(response.data.Token));
        router.push("/verify");
      } else {
        dispatch(Login(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.Token));
        router.push("/");
        console.log(user);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')] relative  bg-no-repeat flex justify-center bg-cover h-auto xl2:h-[100%] p-32 xl1:p-20 tablet2.1:px-14 mobile2.1:px-10 mobile1:px-5 mobile1.1:px-3 pt-[100px] tablet:pt-[50px] py-[10%] loginmaindivClass">
        <div className="bg-black relative opacity-75 w-[100%] flex xl2:grid mobile:gap-10 rounded-[40px] p-10 h-auto">
          <div className="grid xl2:gap-5 w-[500px] mobile:w-[80%]">
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-[100%] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Full Name
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-[100%] flex border-[#FFB636]">
                <input
                  placeholder="Sarah Ali"
                  className="bg-transparent text-[#ffffff] placeholder:text-[#78694f] w-[450px] outline-none mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  value={fullName}
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-[100%] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Email
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-[100%] flex border-[#FFB636]">
                <input
                  placeholder="Sarah@venturegames.com"
                  className="bg-transparent text-[#ffffff] placeholder:text-[#78694f] w-[450px] outline-none mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={Email}
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] xl2:w-[500px] mobile1:w-[100%] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Password
              <form className="border-b-[2px] xl2:w-[500px] mobile1:w-[100%] flex border-[#FFB636]">
                <input
                  placeholder="password"
                  type="password"
                  className="bg-transparent text-[#ffffff] placeholder:text-[#78694f] w-[450px] outline-none mobile1:w-[350px] placeholder:opacity-90 placeholder:text-[25px] mobile1.1:placeholder:text-[15px]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={Password}
                ></input>
              </form>
            </div>
            <div className="text-[#FFB636] text-[35px] grid xl2:w-[500px] mobile1:w-[100%] mobile1:text-[25px] mobile1.1:text-[20px] mt-[15%] xl2:mt-[5%] loginheading1">
              Contact No.
              <div className="flex items-center">
                <div className="text-[#FFB636] text-[25px] flex mt-3">
                  +92<span className="px-3"> - </span>
                </div>
                <form className="border-b-[2px] xl2:w-[500px] items-center mobile1:w-[100%] flex border-[#FFB636]">
                  <input
                    placeholder="contact"
                    type="tel"
                    pattern="[0-9]{4}-[0-9]{7}"
                    className="bg-transparent text-[#ffffff]
                  placeholder:text-[#78694f] w-[450px] outline-none mobile1:w-[350px]
                  placeholder:opacity-90 placeholder:text-[25px]
                  mobile1.1:placeholder:text-[15px]"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    value={Contact}
                  ></input>
                </form>
              </div>
            </div>
            <div>
              <button
                onClick={(e) => {
                  handleSignUp();
                }}
                className="mt-[5%] float-right mobile:float-left text-[30px] flex items-center text-[#FFB636] align-middle "
              >
                next
                <BsArrowRightShort />
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 items-end text-right text-[140px] xl2:text-[100px] xl2:mt-10 tablet2.1:text-[80px] mobile1:text-[60px] mobile1.1:text-[50px] leading-[130px] tablet2.1:leading-[90px] mobile1:leading-[70px] mobile1.1:leading-[60px] font-lemonmilk  xl2:relative right-20 xl2:right-0 text-[#FDD501CF] loginheading">
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

SignupPage.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
