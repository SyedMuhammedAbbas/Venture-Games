import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
  const [orderDetails, setOrderDetails] = useState();
  const [shippingOrderDetails, setShippingOrderDetails] = useState();
  const [flag, setFlag] = useState(true);

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
    if (response.data.Token) {
      toast.success("Password Changed", {
        className: "toast-message",
      });
    } else {
      toast.error("Password Invalid", {
        className: "toast-message",
      });
    }
  }

  async function getOrders() {
    const jwtToken = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.get(
      "https://api.venturegames.pk/Order/GetUserOrder",
      config
    );
    setOrderDetails(response.data);
    let arr = [];
    for (let i = 0; i < response.data.length; i++) {
      if (
        response.data.Status != "DELIVERED" ||
        response.data.Status != "CANCELLED"
      ) {
        arr.push(response.data[0]);
      }
    }
    setShippingOrderDetails(arr);
  }

  async function hasPassword() {
    const jwtToken = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.get(
      "https://api.venturegames.pk/HasPassword",
      config
    );
    setFlag(response.data);
  }

  useEffect(() => {
    getOrders();
    hasPassword();
  }, []);

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
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                {flag && (
                  <div className="grid gap-5">
                    <div className="text-white text-[25px]">New Password</div>
                    <input
                      className="w-[500px] text-white text-[23px] placeholder:text-blackOpac mobile2:w-[90%] placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                      placeholder="New Password"
                      value={newPassword}
                      type="password"
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                )}
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
                    Delivery Status:
                    <div>
                      <ul className="h-[600px] px-10 overflow-y-auto productTitle">
                        {shippingOrderDetails &&
                          shippingOrderDetails.map((order) => (
                            <li>
                              <ul className="text-white text-[23px]">
                                <li className="text-white text-[23px]">
                                  OrderId: {order._id}
                                </li>
                                <li className="text-white text-[23px]">
                                  CreatedAt: {order.createdAt}
                                </li>
                                <li className="text-white text-[23px]">
                                  Billin Address 1: {order.BillingAddress1}
                                </li>
                                <li className="text-white text-[23px]">
                                  Billin Address 2: {order.BillingAddress2}
                                </li>
                                <li className="text-white text-[23px]">
                                  Shipping Address 1: {order.ShippingAddress1}
                                </li>
                                <li className="text-white text-[23px]">
                                  Shipping Address 2: {order.ShippingAddress2}
                                </li>
                                <li className="text-white text-[23px]">
                                  Email: {order.EmailAddress}
                                </li>
                                <li className="text-white text-[23px]">
                                  Full Name: {order.FullName}
                                </li>
                                <li className="text-white text-[23px]">
                                  Paid: {order.Paid}
                                </li>
                                <li className="text-white text-[23px]">
                                  Payment Method: {order.PaymentMethod}
                                </li>
                                <li className="text-white text-[23px]">
                                  COD: {order.COD}
                                </li>
                                <li className="text-white text-[23px]">
                                  Billing Phone: {order.BillingPhone}
                                </li>
                                <li className="text-white text-[23px]">
                                  Shipping Phone: {order.ShippingPhone}
                                </li>
                                <li className="text-white text-[23px]">
                                  Shipping Price: {order.ShippingPrice}
                                </li>
                                <li className="text-white text-[23px]">
                                  Shipping Region: {order.ShippingRegion}
                                </li>
                                <li className="text-white text-[23px]">
                                  Statues: {order.Status}
                                </li>
                                <li className="text-white text-[23px]">
                                  Total Price: {order.TotalPrice}
                                </li>
                                <li className="text-white text-[23px]">
                                  Weight: {order.Weight}
                                </li>
                                <li>
                                  Products:
                                  <ul className="flex flex-wrap gap-5 p-10">
                                    {order.Products.map((product) => (
                                      <div className="grid p-5 justify-center gap-2 bg-black rounded-xl bg-opacity-30 backdrop-blur-xl z-[999] w-[350px] h-[400px] items-center overflow-y-auto productTitle">
                                        <li className="flex justify-center">
                                          <img
                                            className="w-28 h-28 rounded-md"
                                            src={product.Product.Images[0]}
                                          ></img>
                                        </li>
                                        <li className="text-white text-[23px] text-center ">
                                          {product.Product.Title}
                                        </li>
                                        <li className="text-white text-[23px] text-center ">
                                          QTY x {product.Quantity}
                                        </li>
                                        <li className="text-white text-[23px] text-center ">
                                          Rs {product.Price}
                                        </li>
                                      </div>
                                    ))}
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-white text-[25px]">Order History:</h1>
                  <ul className="h-[600px] px-10 overflow-y-auto productTitle">
                    {orderDetails &&
                      orderDetails.map((order) => (
                        <li className="pb-10">
                          <ul className="text-white text-[23px]">
                            <li className="text-white text-[23px]">
                              OrderId: {order._id}
                            </li>
                            <li className="text-white text-[23px]">
                              CreatedAt: {order.createdAt}
                            </li>
                            <li className="text-white text-[23px]">
                              Billin Address 1: {order.BillingAddress1}
                            </li>
                            <li className="text-white text-[23px]">
                              Billin Address 2: {order.BillingAddress2}
                            </li>
                            <li className="text-white text-[23px]">
                              Shipping Address 1: {order.ShippingAddress1}
                            </li>
                            <li className="text-white text-[23px]">
                              Shipping Address 2: {order.ShippingAddress2}
                            </li>
                            <li className="text-white text-[23px]">
                              Email: {order.EmailAddress}
                            </li>
                            <li className="text-white text-[23px]">
                              Full Name: {order.FullName}
                            </li>
                            <li className="text-white text-[23px]">
                              Paid: {order.Paid}
                            </li>
                            <li className="text-white text-[23px]">
                              Payment Method: {order.PaymentMethod}
                            </li>
                            <li className="text-white text-[23px]">
                              COD: {order.COD}
                            </li>
                            <li className="text-white text-[23px]">
                              Billing Phone: {order.BillingPhone}
                            </li>
                            <li className="text-white text-[23px]">
                              Shipping Phone: {order.ShippingPhone}
                            </li>
                            <li className="text-white text-[23px]">
                              Shipping Price: {order.ShippingPrice}
                            </li>
                            <li className="text-white text-[23px]">
                              Shipping Region: {order.ShippingRegion}
                            </li>
                            <li className="text-white text-[23px]">
                              Statues: {order.Status}
                            </li>
                            <li className="text-white text-[23px]">
                              Total Price: {order.TotalPrice}
                            </li>
                            <li className="text-white text-[23px]">
                              Weight: {order.Weight}
                            </li>
                            <li>
                              Products:
                              <ul className="flex flex-wrap gap-5 p-10">
                                {order.Products.map((product) => (
                                  <div className="grid p-5 justify-center gap-2 bg-black rounded-xl bg-opacity-30 backdrop-blur-xl z-[999] w-[350px] h-[400px] items-center overflow-y-auto productTitle">
                                    <li className="flex justify-center">
                                      <img
                                        className="w-28 h-28 rounded-md"
                                        src={product.Product.Images[0]}
                                      ></img>
                                    </li>
                                    <li className="text-white text-[23px] text-center ">
                                      {product.Product.Title}
                                    </li>
                                    <li className="text-white text-[23px] text-center ">
                                      QTY x {product.Quantity}
                                    </li>
                                    <li className="text-white text-[23px] text-center ">
                                      Rs {product.Price}
                                    </li>
                                  </div>
                                ))}
                              </ul>
                            </li>
                          </ul>
                        </li>
                      ))}
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
