import { useEffect, useState } from "react";
import useRedirect from "../../hooks/Redirect";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Login } from "../../features/counter/userSlice";

export default function EmailVerified() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);

  async function getuser() {
    const jwtToken = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.get(
      "https://api.venturegames.pk/GetProfile",
      config
    );
    if (response.status == 200) {
      dispatch(Login(response.data));
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      throw err;
    }
  }
  useEffect(() => {
    try {
      console.log(flag);
      if (flag) {
        getuser();
        setFlag(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
  const { secondsRemaining } = useRedirect("/", 5);
  return (
    <>
      <div className="bg-[#1A1A1A] snap-start grid justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
        <div className="grid justify-center gap-5 text-[#ffffff] text-[25px] mobile:text-[20px]">
          <div className="text-[25px] justify-center ">
            Your Email has been verified
          </div>
          <div className="text-[35px] text-center">
            Redirecting in {"  "}
            {secondsRemaining > 0 ? secondsRemaining : 0} seconds...
          </div>
        </div>
      </div>
    </>
  );
}
