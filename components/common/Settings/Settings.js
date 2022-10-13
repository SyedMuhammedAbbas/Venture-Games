import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Settings() {
  const user = useSelector((state) => state.user.userDetails);
  const userName = user.FullName;
  const userEmail = user.EmailAddress;
  const userPassword = "**************";

  const [pass, setPass] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [Orders, setOrders] = useState(false);
  const [Details, setDetails] = useState(false);

  function handlePass() {
    {
      pass ? setPass(false) : setPass(true);
    }
  }

  function handleOrders() {
    {
      Orders ? setOrders(false) : setOrders(true);
    }
  }
  function handleDetails() {
    {
      Details ? setDetails(false) : setDetails(true);
    }
  }
  async function handlePasswordChange(e) {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    let response = await axios.post(
      "https://api.venturegames.pk/ChangePassword",
      {
        Password: password,
        NewPassword: newPassword,
      },
      config
    );
    console.log(response);
  }
  return (
    <>
      <div className="min-h-[140vh] max-h-[100%] bg-[#FFB636] py-[5%] px-[10%] mobile:px-[5%]">
        <div>
          <h1 className="text-[#000] text-[60px] pb-[2%] font-semibold">
            Account Settings / {userName}
          </h1>
        </div>
        <div className="grid gap-7">
          <div className="grid gap-5 w-[100%] ">
            <div
              className="flex items-center bg-[#282828] relative h-[80px] px-[3%] rounded-[25px] shadow-2xl"
              onClick={handleDetails}
            >
              <div className="text-white text-[30px] ">Details</div>
              {Details ? (
                <button className="absolute right-20 text-[25px] text-white">
                  <MdKeyboardArrowDown />
                </button>
              ) : (
                <button className="absolute right-20 text-[25px] text-white">
                  <MdKeyboardArrowRight />
                </button>
              )}
            </div>
            {Details && (
              <div className="grid gap-10 items-center bg-[#3a3a3a] relative px-[3%] py-[4%] rounded-[25px] shadow-2xl">
                <div className="grid gap-5 border-b border-blackOpac pb-10">
                  <div className="text-white text-[25px] flex items-center">
                    Name:{" "}
                    <span className="pl-7 text-[23px] text-white ">
                      {userName}
                    </span>
                  </div>
                </div>
                <div className="grid gap-5 border-b border-blackOpac pb-10">
                  <div className="text-white text-[25px] flex items-center">
                    Email:{" "}
                    <span className="pl-7 text-[23px] text-white ">
                      {userEmail}{" "}
                    </span>
                  </div>
                </div>
                <div className="grid gap-5">
                  <div className="text-white text-[25px] flex items-center">
                    Password:{" "}
                    <span className="pl-7 text-[23px] text-white ">
                      {userPassword}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-5 w-[100%] ">
            <div
              className="flex items-center bg-[#282828] relative h-[80px] px-[3%] rounded-[25px] shadow-2xl"
              onClick={handlePass}
            >
              <div className="text-white text-[30px] ">Change Password</div>
              {pass ? (
                <button className="absolute right-20 text-[25px] text-white">
                  <MdKeyboardArrowDown />
                </button>
              ) : (
                <button className="absolute right-20 text-[25px] text-white">
                  <MdKeyboardArrowRight />
                </button>
              )}
            </div>
            {pass && (
              <div className="grid gap-10 items-center bg-[#3a3a3a] relative px-[3%] py-[4%] rounded-[25px] shadow-2xl">
                <div className="grid gap-5 border-b border-blackOpac pb-10">
                  <div className="text-white text-[25px]">Current Password</div>
                  <input
                    className="w-[500px] text-white text-[23px] placeholder:text-blackOpac mobile2:w-[90%] placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                    placeholder="Current Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="grid gap-5">
                  <div className="text-white text-[25px]">New Password</div>
                  <input
                    className="w-[500px] text-white text-[23px] placeholder:text-blackOpac mobile2:w-[90%] placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex justify-center">
                  <button
                    className="border border-blackOpac bg-transparent rounded-[10px] font-semibold text-[20px] text-[#fff] hover:text-[#000] hover:bg-white hover:border-[#fff] w-[200px] py-2"
                    onClick={(e) => {
                      handlePasswordChange(e);
                    }}
                  >
                    Set Password
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-5 w-[100%]">
            <div
              className="flex items-center bg-[#282828] relative h-[80px] px-[3%] rounded-[25px] shadow-2xl"
              onClick={handleOrders}
            >
              <div className="text-white text-[30px] ">Orders</div>
              {Orders ? (
                <button className="absolute right-20 text-[25px] text-white">
                  <MdKeyboardArrowDown />
                </button>
              ) : (
                <button className="absolute right-20 text-[25px] text-white">
                  <MdKeyboardArrowRight />
                </button>
              )}
            </div>
            {Orders && (
              <div className="grid gap-10 items-center bg-[#3a3a3a] relative px-[3%] py-[4%] rounded-[25px] shadow-2xl">
                <div>
                  <h1 className="text-white text-[25px]">Track Order</h1>
                  <div className="text-white text-[20px]">
                    Delivery Status: <div></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-white text-[25px]">Order History</h1>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
