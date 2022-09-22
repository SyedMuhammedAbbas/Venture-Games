// import CartProducts from "./CartProducts";
import ProfileBar from "../common/ProfileBar";
import Spiderman from "../../images/image 4.png";
import PS5Controller from "../../images/ps5Controller.png";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";

export default function ShoppingCart() {
  const router = useRouter();
  const products = [
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: "PS4",
      product_condition: "NEW",
      product_price: 15000,
      product_image: Spiderman.src,
      product_weight: 0.93,
    },
    {
      product_title: "PS5 Controller",
      product_platform: "PS5",
      product_condition: "USED",
      product_price: 20000,
      product_image: PS5Controller.src,
      product_weight: 2,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: "PS4",
      product_condition: "NEW",
      product_price: 15000,
      product_image: Spiderman.src,
      product_weight: 0.93,
    },
  ];
  // Quantity
  const Number_Of_products = [1, 2, 3, 4, 5, 6, 7];

  const [total_items, setTotal_Items] = useState(0);
  const [total_weight, setTotal_Weight] = useState(0);
  const [total_amount, setTotal_Amount] = useState(0);
  const [total_all, setTotal_All] = useState(0);

  useEffect(() => {
    setTotal_Items(products.length);

    setTotal_Amount(
      products.reduce(
        (total_amount, { product_price }) => total_amount + product_price,
        0
      )
    );
    setTotal_Weight(
      products.reduce(
        (total_weight, { product_weight }) => total_weight + product_weight,
        0
      )
    );
    setTotal_All(total_amount);
  }, []);

  const t_weight = Math.round(total_weight * 100) / 100;
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
    t_weight,
    shipping_fee,
    total_all,
    coupon(),
  ];

  return (
    <>
      <ProfileBar />
      <div className="bg-[#FFB636] pb-20 h-[100%]">
        {products.length > 0 ? (
          <div className="flex xl3:grid">
            <div className="pt-[13%] pb-[5%] xl3:pt-[17%] tablet:pt-[11%] mobile:pt-[150px] w-[55%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[100%]">
              <h1 className="text-black text-[60px] xl3:text-[50px] mobile:text-[40px] pl-10 capitalize">
                Shopping Cart
              </h1>

              <div className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[100%] pt-5  mobile1:w-[95%] rounded-tr-[40px] rounded-br-[40px] ">
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
                    {products.map((index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b-[1px] border-[#626262] pb-10"
                        >
                          <td className="p-20 py-10 px-5 mobile1.1:pr-0 pl-10 mobile1:pl-5 mobile1.1:w-[100px]">
                            <div className="flex gap-4 text-center xl3:grid xl3:gap-1 xl3:text-left">
                              <img
                                className="w-[170px] bg-contain mobile1.1:w-[150px] rounded-3xl"
                                src={index.product_image}
                              ></img>
                              <div className="grid h-[50px] xl3:h-auto xl3:w-auto">
                                <div className="text-white text-[25px] overflow-auto h-20 mobile1.1:text-[20px] pt-auto pb-4 ">
                                  {index.product_title}
                                </div>
                                <div className="border-b-[1.5px] border-[#6f6f6f] w-[200px]"></div>
                                <div className="flex gap-2 pt-4 w-[200px]">
                                  <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black">
                                    {index.product_platform}
                                  </button>
                                  <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black">
                                    {index.product_condition}
                                  </button>
                                  <button className="text-[30px] text-[#FFB636] ml-10">
                                    <AiOutlineDelete />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="pl-5 mt-[100%] text-center">
                            <select
                              name="1"
                              className="border-[1px] rounded-xl text-white bg-transparent p-1 px-4 text-[20px]"
                            >
                              {Number_Of_products.map(
                                (Number_Of_products, index) => (
                                  <option
                                    key={index}
                                    className="text-black bg-transparent text-[20px]"
                                  >
                                    {Number_Of_products}
                                  </option>
                                )
                              )}
                            </select>
                          </td>
                          <td className="pl-20 xl3:pl-10 mobile1.1:pl-4 ">
                            <h2 className="text-white text-[27px] mobile1:text-[20px]">
                              {index.product_price}{" "}
                              <span className="text-[15px]">Rs</span>
                            </h2>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
                <div className="text-right text-[25px] mobile1.1:text-[20px] py-7 pr-10 text-[#979797]">
                  Cart feels empty? {/* <Link href="/shop"> */}
                  <a
                    onClick={() => router.push("/shop")}
                    className="underline text-white cursor-pointer"
                  >
                    Shop More
                  </a>
                  {/* </Link> */}
                </div>
              </div>
            </div>

            <div className="grid pt-[13%] xl3:pt-[17%] tablet:pt-[11%] tablet1:pt-0 absolute right-0 tablet1:relative tablet1:left-0 w-[40%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[95%]">
              <h1 className="text-black text-right tablet1:text-left mr-10 text-[60px] xl3:text-[50px] mobile:text-[40px] tablet1:pl-10  capitalize">
                order summary
              </h1>
              <div className=" w-auto">
                <table className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] rounded-tl-[35px] tablet1:rounded-tl-none tablet1:rounded-tr-[35px] w-[100%]  mobile1:w-[100%]">
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
          </div>
        ) : (
          <div className="flex mobile2:grid gap-7 mobile2:gap-1 text-center text-[45px] pr-10 text-[#868686] justify-center pt-[500px] h-[125vh]">
            Cart is empty ! {/* <Link href="/shop"> */}
            <div className="flex gap-1" onClick={() => router.push("/shop")}>
              <a className=" text-white cursor-pointer">Shop Now</a>
              <div className="text-white font-normal mt-3 cursor-pointer">
                <MdDoubleArrow />
              </div>
            </div>
            {/* </Link> */}
          </div>
        )}
      </div>
    </>
  );
}
