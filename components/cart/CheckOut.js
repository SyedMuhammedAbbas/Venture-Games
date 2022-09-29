import { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import toggel1 from "../../styles/Toggel1.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CheckOut() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total_items, setTotal_Items] = useState(0);
  const [total_weight, setTotal_Weight] = useState(0);
  const [total_amount, setTotal_Amount] = useState(0);
  const shipping_fee = 450;
  function coupon() {
    return (
      <button className="border-[1px] border-white rounded-lg px-4 bg-transparent uppercase hover:text-black hover:border-black hover:bg-white">
        Add
      </button>
    );
  }
  useEffect(() => {
    setTotal_Items(Object.values(cartItems).length);
    setTotal_Amount(
      Object.values(cartItems).reduce(
        (acc, curr) => acc + Number(curr.product_newprice) * curr.quantity,
        0
      )
    );

    setTotal_Weight(
      Math.round(
        Object.values(cartItems).reduce(
          (acc, curr) => acc + Number(curr.product_weight) * curr.quantity,
          0
        ) * 100
      ) / 100
    );
  }, [Object.values(cartItems)]);
  const order_summary = [
    "total items:",
    "total amount:",
    "total weight:",
    "shipping fee:",
    "total",
    "coupon",
  ];
  const order_summary_values = [
    total_items,
    total_amount,
    total_weight,
    shipping_fee,
    total_amount,
    coupon(),
  ];

  return (
    <>
      <div className="bg-[#FFB636] pb-20 h-[100%]">
        <div className="flex xl3:grid w-[100%]">
          <div className="pt-[13%] pb-[5%] xl3:pt-[17%] tablet:pt-[11%] mobile:pt-[150px] w-[55%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[100%]">
            <h1 className="text-black font-semibold text-[60px] xl3:text-[50px] mobile:text-[40px] pl-10 capitalize">
              Delivery Information
            </h1>

            <div className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[100%] p-10  mobile1:w-[95%] rounded-tr-[40px] rounded-br-[40px] ">
              <div className="grid gap-5">
                <div className="grid gap-5">
                  <h1 className="text-white text-[60px]">Consignee Details</h1>
                  <div className="grid gap-8">
                    <div>
                      <input
                        className="w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                        placeholder="Email Address"
                      ></input>
                    </div>
                    <div className="flex gap-[2%] mobile2:grid mobile2:gap-8">
                      <input
                        className="w-[34%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                        placeholder="First Name"
                      ></input>
                      <input
                        className="w-[34%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                        placeholder="Last Name"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <h1 className="text-white text-[60px]">Shipment details</h1>
                  <div className="mr-[100%]">
                    <input type="checkbox" className={toggel1.input}></input>
                  </div>
                  <div className="grid gap-10">
                    <h1 className="text-white text-[30px]">Shipping Address</h1>

                    <div className="grid gap-8">
                      <input
                        className="w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                        placeholder="Address Line 1"
                      ></input>
                      <input
                        className="w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                        placeholder="Address Line 2"
                      ></input>
                      <input
                        className="w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                        placeholder="Contact Number"
                      ></input>
                    </div>
                    <div>
                      <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-6 h-6 bg-gray-50  border rounded-[100%] border-gray-300 focus:bg-gray-700 focus:ring-gray-700"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="ml-2 text-[16px] font-medium text-white "
                        >
                          My Shipping Address & Billing Address are same
                        </label>
                      </div>
                      <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-6 h-6 bg-gray-50  border rounded-[100%] border-gray-300 focus:bg-gray-700 focus:ring-gray-700"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="ml-2 text-[16px] font-medium text-white "
                        >
                          By Proceeding you accept our Terms of use & Privacy
                          policy.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid pt-[13%] xl3:pt-[17%] tablet:pt-[11%]  tablet1:pt-0 absolute right-0 tablet1:relative tablet1:left-0 w-[40%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[95%]">
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
                            {order_summary_values[index]}
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
                            {order_summary_values[index] + " kg"}
                          </td>
                        </tr>
                      );
                    } else if (order_summary === "shipping fee:") {
                      return (
                        <tr key={index} className="">
                          <td className="pt-5 pl-10 pb-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                            {order_summary}
                          </td>
                          <td className="pt-5 absolute right-0 pb-0 text-right font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
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
                            {order_summary_values[index] + " Rs"}
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
                            {order_summary_values[index]}
                          </td>
                        </tr>
                      );
                    }
                  }
                })}
              </table>
              <div className="flex gap-2 bg-gradient-to-tl from-[#000] to-[#b58126] rounded-bl-[25px] tablet1:rounded-br-[25px] tablet1:rounded-bl-none mt-5 justify-center text-white text-[25px] mobile1.1:text-[20px] py-[15px]">
                <div className="uppercase">
                  <Link href="/payment">
                    <a className="cursor-pointer">continue to payment</a>
                  </Link>
                </div>
                <div className="text-white text-[35px] mobile1.1:text-[30px] mt-[2px] mobile1.1:mt-[1px] cursor-pointer">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
