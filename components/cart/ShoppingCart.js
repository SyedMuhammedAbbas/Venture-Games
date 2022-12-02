import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { DeleteFromCart } from "../../features/counter/cartSlice";
import { SetProdQuantity } from "../../features/counter/cartSlice";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../features/counter/cartSlice";
import axios from "axios";
import SpinningLoader from "../common/SpinningLoader";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartInfo = useSelector((state) => state.cart);
  const [total_items, setTotal_Items] = useState(0);
  const [total_weight, setTotal_Weight] = useState(0);
  const [total_amount, setTotal_Amount] = useState(0);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleDeleteFromCart = async (currentItems) => {
    dispatch(DeleteFromCart(currentItems));
    const jwtToken = JSON.parse(localStorage.getItem("token"));
    console.log(jwtToken);
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.delete(
      "https://api.venturegames.pk/RemoveProductCart?ProductId=" + currentItems,
      config
    );
    console.log(response);
    getCart();
  };

  const handleQuantityCart = async (id, newQuantity) => {
    dispatch(SetProdQuantity({ _id: id, quantity: newQuantity }));
    const jwtToken = JSON.parse(localStorage.getItem("token"));
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    await axios.post(
      "https://api.venturegames.pk/AddtoCart",
      {
        ProductId: id,
        Quantity: newQuantity,
      },
      config
    );

    getCart();
  };

  async function getCart() {
    let jwtToken = JSON.parse(localStorage.getItem("token"));
    console.log(jwtToken);
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.get(
      "https://api.venturegames.pk/GetCart",
      config
    );
    // console.log("Here");
    console.log(response.data);
    setTotal_Items(response.data.CartItems.length);
    setTotal_Amount(response.data.CartPrice);
    setTotal_Weight(response.data.CartWeight);
    console.log(response);
    dispatch(setCartItem(response.data));
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCart();
    if ((total_amount && total_items && total_weight) !== undefined) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);

  const shipping_fee = "calculated at next step";
  function coupon() {
    return (
      <button className="border-[1px] border-white rounded-lg px-4 bg-transparent uppercase hover:text-black hover:border-black hover:bg-white">
        Add
      </button>
    );
  }
  const order_summary = [
    "total items:",
    "total amount:",
    "total weight:",
    "shipping fee:",
    "total",
    // "coupon",
  ];
  const order_summary_values = [
    total_items,
    total_amount,
    total_weight,
    shipping_fee,
    total_amount,
    // coupon(),
  ];
  return (
    <>
      <div className="bg-[#FFB636] pb-20 min-h-[140vh] max-h-[100%]">
        {Object.values(cartItems).length > 0 ? (
          <div className="flex xl3:grid">
            <div className="pt-[5%] pb-[5%] xl3:pt-[7%] tablet:pt-[7%] w-[55%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[100%]">
              <h1 className="text-black font-semibold text-[60px] xl3:text-[50px] mobile:text-[40px] pl-10 capitalize">
                Shopping Cart
              </h1>

              <div className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[100%] h-auto pt-5  mobile1:w-[95%] rounded-tr-[40px] rounded-br-[40px] ">
                <div className="h-[110vh] overflow-auto desp-scroll">
                  <table className="w-[100%] ">
                    <tr className=" text-white uppercase">
                      <th className="pl-[50px] text-left mobile1.1:pl-[20px] pt-10  text-[20px] mobile1.1:text-[15px]  font-normal">
                        description
                      </th>
                      <th className="pl-10  mobile1.1:pl-0 xl3:pl-0 pt-10 text-center text-[20px] mobile1.1:text-[15px]  font-normal">
                        quantity
                      </th>
                      <th className="pl-20 xl3:pl-10 pb-0 pt-10 xl3:pt-9 text-left text-[20px] mobile1.1:text-[15px]  font-normal">
                        price
                      </th>
                    </tr>
                    {Object.values(cartItems || {}).map((currentItem) => {
                      return (
                        <tr
                          key={currentItem}
                          className="border-b-[1px] border-[#626262] pb-10"
                        >
                          <td className="p-20 py-10 px-5 mobile1.1:pr-0 pl-10 mobile1:pl-5 mobile1.1:w-[100px]">
                            <div className="flex gap-4 text-center xl3:grid xl3:gap-1 xl3:text-left">
                              <img
                                className="w-[170px] h-[170px] bg-contain mobile1.1:w-[150px] mobile1.1:h-[150px] rounded-3xl"
                                src={currentItem.Images}
                              ></img>
                              <div className="grid h-[50px] xl3:h-auto xl3:w-auto">
                                <div className="text-white text-[25px] h-auto mobile1.1:text-[20px] pt-auto  ">
                                  {currentItem.Title}
                                </div>
                                <div className="border-b-[1.5px] border-[#6f6f6f] w-[200px]"></div>
                                <div className="flex gap-2 pt-4 w-[200px]">
                                  {/* {currentItem.Platform &&
                                    currentItem.product_platform.map(
                                      (product_platform, index) => ( */}
                                  <button
                                    // key={index}
                                    className="font-semibold uppercase border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black"
                                  >
                                    {currentItem.Platform.Title}
                                  </button>
                                  {/* )
                                    )} */}
                                  <button className=" font-semibold uppercase border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black">
                                    {currentItem.Type}
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteFromCart(currentItem._id)
                                    }
                                    className="text-[30px] text-[#ffffff] hover:text-[#FFB636] ml-10"
                                  >
                                    <AiOutlineDelete />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-5 mt-[100%] text-center">
                            <select
                              as="select"
                              value={currentItem.quantity}
                              className="border-[1px] rounded-xl text-white bg-transparent p-1 px-4 text-[20px]"
                              onChange={(e) => {
                                handleQuantityCart(
                                  currentItem._id,
                                  e.target.value
                                );
                              }}
                            >
                              {[...Array(currentItem.Quantity).keys()].map(
                                (index) => (
                                  <option
                                    key={index + 1}
                                    className="text-black bg-transparent text-[20px]"
                                  >
                                    {index + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </td>
                          <td className="pl-20 xl3:pl-10 mobile1.1:pl-4 ">
                            <h2 className="text-white text-[27px] mobile1:text-[20px]">
                              {currentItem.Price * currentItem.quantity}{" "}
                              <span className="text-[15px]">Rs</span>
                            </h2>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
                <div className="text-right text-[25px] mobile:text-[15px] py-7 pr-10 text-[#979797] ">
                  {/* <button>Clear Cart</button> */}
                  Cart feels empty?
                  <Link href="/shop">
                    <a className="underline text-white cursor-pointer">
                      Shop More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid pt-[5%] xl3:pt-[7%] tablet:pt-[7%]  tablet1:pt-0 absolute right-0 tablet1:relative tablet1:left-0 w-[40%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[95%]">
              <h1 className="text-black font-semibold text-right tablet1:text-left mr-10 text-[60px] xl3:text-[50px] mobile:text-[40px] tablet1:pl-10  capitalize">
                order summary
              </h1>
              <div className="w-auto ">
                <table className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126]  rounded-tl-[35px] tablet1:rounded-tl-none tablet1:rounded-tr-[35px] w-[100%]  mobile1:w-[100%]">
                  {order_summary.map((order_summary, index) => {
                    {
                      if (index === 0) {
                        return (
                          <tr key={index} className="">
                            <td className="pt-10 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                              {order_summary}
                            </td>
                            <td className="pt-10 absolute right-0 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {loading ? (
                                <SpinningLoader />
                              ) : (
                                cartInfo.cartTotalQuantity
                              )}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "total weight:") {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 pb-0 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                              {order_summary}
                            </td>
                            <td className="pt-5 absolute right-0 pb-0 text-right font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {loading ? (
                                <SpinningLoader />
                              ) : (
                                cartInfo.cartTotalWeight + " g"
                              )}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "shipping fee:") {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 pb-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                              {order_summary}
                            </td>
                            <td className="pt-6 pb-10 absolute right-0  uppercase font-medium text-white text-[12px] tablet1:text-[15px] mobile1.1:text-[14px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "total") {
                        return (
                          <tr
                            key={index}
                            className="  border-t-[1px] border-blackOpac"
                          >
                            <td className="py-3 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                              {order_summary}
                            </td>
                            <td className="py-0 absolute pt-3 right-0 font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {loading ? (
                                <SpinningLoader />
                              ) : (
                                cartInfo.cartTotalAmount + " Rs"
                              )}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "coupon") {
                        return (
                          <tr
                            key={index}
                            className="border-y-[1px] border-blackOpac"
                          >
                            <td className="py-3 pl-10 pb-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                              {order_summary}
                            </td>
                            <td className="pt-3 absolute right-0 text-right uppercase font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                              {order_summary}
                            </td>
                            <td className="pt-5 pl-10 absolute right-0 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {loading ? (
                                <SpinningLoader />
                              ) : (
                                order_summary_values[index]
                              )}
                            </td>
                          </tr>
                        );
                      }
                    }
                  })}
                </table>
                <Link href="/checkout">
                  <div className="flex gap-2 cursor-pointer bg-gradient-to-tl from-[#000] to-[#b58126] rounded-bl-[25px] tablet1:rounded-br-[25px] tablet1:rounded-bl-none mt-5 justify-center text-white text-[25px] mobile1.1:text-[20px] py-[15px]">
                    <div className="uppercase">
                      <a className="cursor-pointer">Next</a>
                    </div>
                    <div className="text-white text-[35px] mobile1.1:text-[30px] mt-[2px] mobile1.1:mt-[1px] cursor-pointer">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </Link>
                <div className="text-[1.5vw] tablet:text-[16px] pt-5 tablet1:ml-10 text-[#545454] font-semibold ">
                  By Clicking NEXT I agree to Venture Game's{" "}
                  <Link href="/terms">
                    <span className="underline cursor-pointer">
                      terms of services
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[140vh] max-h-[100%] mobile:min-h-screen flex justify-center items-center">
            <div className=" flex mobile:grid gap-7 mobile:gap-0 mobile:h-[80px] justify-center  text-[45px] mobile:text-[40px] text-[#868686] ">
              <div>Cart is empty !</div>
              <span className="flex gap-1 items-center justify-center mobile:mt-0 mobile:text-[35px]">
                <Link href="/shop">
                  <a className=" text-white cursor-pointer">Shop Now</a>
                </Link>
                <div className="text-white font-normal mt-3 cursor-pointer">
                  <MdDoubleArrow />
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
