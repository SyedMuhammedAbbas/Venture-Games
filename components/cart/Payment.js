import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CheckOut() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total_items, setTotal_Items] = useState(0);
  const [total_weight, setTotal_Weight] = useState(0);
  const [total_amount, setTotal_Amount] = useState(0);
  const shipping_fee = 450;

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
  ];
  const order_summary_values = [
    total_items,
    total_amount,
    total_weight,
    shipping_fee,
    total_amount,
  ];
  const [getVal, setVal] = useState(false);
  function handleDebitCard() {
    setVal(true);
  }
  function handleCOD() {
    setVal(false);
  }
  return (
    <>
      <div className="bg-[#FFB636] pb-20 h-[100%]">
        <div className="flex xl3:grid w-[100%]">
          <div className="pt-[13%] pb-[5%] xl3:pt-[17%] tablet:pt-[11%] mobile:pt-[150px] w-[55%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[100%]">
            <h1 className="text-black font-semibold text-[60px] xl3:text-[50px] mobile:text-[40px] pl-10 capitalize">
              Delivery Information
            </h1>

            <div className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[100%] p-10  mobile1:w-[95%] rounded-tr-[40px] rounded-br-[40px] ">
              <div className="grid gap-10">
                <div className="grid gap-6">
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
                  <h1 className="text-white text-[60px]">Payment Method</h1>

                  <div className="grid gap-8">
                    <div className="flex gap-[4%] mobile2:grid mobile2:gap-7">
                      <button
                        onClick={handleCOD}
                        className="w-[33%] mobile2:w-[90%] py-10 text-white text-[20px] rounded-xl bg-transparent border border-white border-opacity-70 focus:bg-black focus:bg-opacity-70 focus:border-[4px] focus:border-opacity-100"
                      >
                        Cash On Delivery
                      </button>
                      <button
                        onClick={handleDebitCard}
                        className="w-[33%] mobile2:w-[90%] py-10 text-white text-[20px] rounded-xl bg-transparent border border-white border-opacity-70 focus:bg-black focus:bg-opacity-70 focus:border-[4px] focus:border-opacity-100"
                      >
                        Debit/Credit Card
                      </button>
                    </div>
                    {getVal ? (
                      <div className="grid gap-7 transition-all">
                        <div>
                          <input
                            className="w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                            placeholder="Name On Card"
                          ></input>
                        </div>
                        <div>
                          <input
                            className="w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                            placeholder="Card Number"
                          ></input>
                        </div>
                        <div className="flex gap-[2%] mobile2:grid mobile2:gap-7">
                          <input
                            className="w-[34%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                            placeholder="Expiry Date"
                          ></input>
                          <input
                            className="w-[34%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] p-2 border-[1px] bg-transparent border-white rounded-lg"
                            placeholder="CVV"
                          ></input>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      <button className="uppercase text-white text-[25px] font-semibold tracking-wider w-[70%] mobile2:w-[90%] py-4 rounded-lg bg-[#68BA01]">
                        <Link href="/thankyou">
                          <a>pay now - pkr 45,450</a>
                        </Link>
                      </button>
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
              <table className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126]  rounded-tl-[35px] rounded-bl-[35px] tablet1:rounded-tl-none tablet1:rounded-tr-[35px] tablet1:rounded-bl-none tablet1:rounded-br-[35px] w-[100%]  mobile1:w-[100%]">
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
                            {order_summary_values[index]} Rs
                          </td>
                        </tr>
                      );
                    } else if (order_summary === "total") {
                      return (
                        <tr
                          key={index}
                          className="  border-t-[1px] border-blackOpac"
                        >
                          <td className="py-4 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]">
                            {order_summary}
                          </td>
                          <td className="py-3 absolute pt-3 right-0 font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                            {order_summary_values[index] + " Rs"}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
