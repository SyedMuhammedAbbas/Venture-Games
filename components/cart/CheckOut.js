import { MdKeyboardArrowRight } from "react-icons/md";
import { productsdata } from "./CartProductsData";
import React, { useState, useEffect } from "react";

export default function CheckOut() {
  const [item, setItem] = useState(productsdata);

  const [total_items, setTotal_Items] = useState(0);
  const [total_weight, setTotal_Weight] = useState(0);
  const [total_amount, setTotal_Amount] = useState(0);
  const [total_all, setTotal_All] = useState(0);

  useEffect(() => {
    setTotal_Items(item.length);
    setTotal_Amount(
      item.map((item, index) => {
        total_amount + item.product_amount;
      })
    );
    setTotal_Weight(
      item.map((item, index) => {
        total_weight + item.product_weight;
      })
    );
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
      <div className="grid pt-[13%] xl3:pt-[17%] tablet:pt-[11%]  tablet1:pt-0 absolute right-0 tablet1:relative tablet1:left-0 w-[40%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[95%]">
        <h1 className="text-black text-right tablet1:text-left mr-10 text-[60px] xl3:text-[50px] mobile:text-[40px] tablet1:pl-10  capitalize">
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
                        {order_summary_values[index] + " Rs"}
                      </td>
                    </tr>
                  );
                } else if (order_summary === "coupon") {
                  return (
                    <tr key={index} className="border-y-[1px] border-blackOpac">
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
              <a className="cursor-pointer">Next</a>
            </div>
            <div className="text-white text-[35px] mobile1.1:text-[30px] mt-[2px] mobile1.1:mt-[1px] cursor-pointer">
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className="text-[1.5vw] tablet:text-[16px] pt-5 tablet1:ml-10 text-[#545454] font-semibold ">
            By Clicking NEXT I agree to Venture Game's terms of services
          </div>
        </div>
      </div>
    </>
  );
}
