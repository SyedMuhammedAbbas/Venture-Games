import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Login } from "../../features/counter/userSlice";
import axios from "axios";
import { useCookies } from "react-cookie";
import { parseCookies } from "../../helpers/";
import { Router, useRouter } from "next/router";

export default function LoginPage() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["token"]);
  const [next, setNext] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const user = useSelector((state) => state.user.userDetails);
  const router = useRouter();

  async function forgetPassword() {
    console.log(Email);
    let response = await axios.post(
      "https://api.venturegames.pk/ForgotPassword",
      {
        EmailAddress: Email,
      }
    );
    router.push("/forgetPassPage");
  }

  async function hasEmail(e) {
    e.preventDefault();
    if (Email.length === 0) {
      setEmail("");
      setNext(false);
    } else {
      let response = await axios.get(
        "https://api.venturegames.pk/EmailExists",
        {
          params: {
            EmailAddress: Email,
          },
        }
      );
      console.log(response);
      if (response.data) {
        setNext(true);
      } else {
        console.log("Not SignedIn");
      }
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      let response = await axios.post("https://api.venturegames.pk/SignIn", {
        EmailAddress: Email,
        Password: Password,
      });

      console.log(response.data.output);
      console.log(response);

      dispatch(Login(response.data.output));
      localStorage.setItem("token", JSON.stringify(response.data.Token));

      router.push("/");
    } catch (err) {
      console.log(err);
    }

    console.log(user);
  }

  function handleGoogleLogin() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        //This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        //The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log(user.accessToken);
        let response = await axios.post(
          "https://api.venturegames.pk/Google/SignIn",
          {
            access_token: token,
            id_token: user.accessToken,
          }
        );

        console.log(response.data.output);
        console.log(response);

        dispatch(Login(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.Token));

        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="bg-[url('../images/loginbackground.png')]  bg-no-repeat flex justify-center bg-cover h-auto xl2:h-[100%] p-32 tablet2.1:px-20 mobile2.1:px-10 mobile1:px-5 mobile1.1:px-3 pt-[200px] tablet2.1:pt-[150px] py-[10%] loginmaindivClass">
        <div className="bg-black opacity-75 w-[100%] relative flex xl2:grid mobile:gap-10 rounded-[40px] p-10 min-h-[100vh] max-h-[100%] ">
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={Password}
                  ></input>
                  <button
                    onClick={(e) => {
                      handleLogin(e);
                    }}
                    className="text-[35px] text-[#FFB636] align-middle "
                  >
                    <BsArrowRightShort />
                  </button>
                </form>
                <button
                  className="text-[20px] text-[#FFB636] pt-[3%] float-right hover:pointer"
                  onClick={() => {
                    forgetPassword();
                  }}
                >
                  Forget Password
                  {/* <Link href="/forgetPassPage"> */}
                  {/* <a className="cursor-pointer">Forget Password</a> */}
                  {/* </Link>{" "} */}
                </button>
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
                    onClick={(e) => {
                      hasEmail(e);
                    }}
                    className="text-[35px] text-[#FFB636] align-middle "
                  >
                    <BsArrowRightShort />
                  </button>
                </form>
                <div className="text-[#ff0404] text-[20px]">
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
                  <FcGoogle
                    onClick={() => {
                      handleGoogleLogin();
                    }}
                  />
                </button>
              </div>
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

LoginPage.getInitialProps = async ({ req, res }) => {
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
