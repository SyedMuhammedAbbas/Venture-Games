// import CartProducts from "./CartProducts";
import ProfileBar from "./ProfileBar";
import Spiderman from "../images/image 4.png";
import PS5Controller from "../images/ps5Controller.png";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ShoppingCart() {
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

  const total_items = products.length;

  const total_amount = products.reduce(
    (total_amount, { product_price }) => total_amount + product_price,
    0
  );
  const total_weight = products.reduce(
    (total_weight, { product_weight }) => total_weight + product_weight,
    0
  );
  const t_weight = Math.round(total_weight * 100) / 100;
  const shipping_fee = "calculated at next step";
  const total_all = total_amount;

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
            <div className="pt-[13%] pb-[5%] xl3:pt-[17%] tablet:pt-[11%] mobile:pt-[150px]">
              <h1 className="text-black text-[60px] xl3:text-[50px] mobile:text-[40px] pl-10 capitalize">
                Shopping Cart
              </h1>

              <div className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[900px] xl3:w-[650px] mobile1:w-[95%] rounded-tr-[40px] rounded-br-[40px] ">
                <table>
                  <tr className=" text-white uppercase">
                    <th className="pl-[50px] pt-10 text-left text-[20px] font-normal">
                      description
                    </th>
                    <th className="pl-10 mobile1.1:pl-0 xl3:pl-0 pt-10 text-left text-[20px] font-normal">
                      quantity
                    </th>
                    <th className="pl-20 xl3:pl-10 pb-0 pt-10 xl3:pt-9 text-left text-[20px] font-normal">
                      price
                    </th>
                  </tr>
                  {products.map((index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b-[1px] border-[#9c9c9c] pb-10"
                      >
                        <td className="p-20 py-10 px-5 mobile1.1:pr-0 pl-10 mobile1:pl-5">
                          <div className="flex gap-4 xl3:grid xl3:gap-1">
                            <img
                              className="w-[170px] bg-contain mobile1.1:w-[150px] rounded-3xl"
                              src={index.product_image}
                            ></img>
                            <div className="grid h-[50px] xl3:h-auto xl3:w-auto">
                              <div className="text-white text-[25px] mobile1.1:text-[20px] pt-auto pb-4 ">
                                {index.product_title}
                              </div>
                              <div className="border-b-[1.5px] border-[#6f6f6f] w-[200px]"></div>
                              <div className="flex gap-2 pt-4">
                                <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[14px] bg-[#FFB636] text-black">
                                  {index.product_platform}
                                </button>
                                <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[14px] bg-[#FFB636] text-black">
                                  {index.product_condition}
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="flex justify-center pt-[5rem]">
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
                        <td className="pl-20 xl3:pl-10 xl3:pb-[135px]">
                          <h2 className="text-white text-[27px] mobile1:text-[20px]">
                            {index.product_price}{" "}
                            <span className="text-[15px]">Rs</span>
                          </h2>
                        </td>
                      </tr>
                    );
                  })}
                </table>
                <div className="text-right text-[25px] py-7 pr-10 text-[#979797]">
                  Cart feels empty?{" "}
                  <Link href="/shop">
                    <a className="underline text-white cursor-pointer">
                      Shop More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid pt-[13%] xl3:pt-[17%] tablet:pt-[11%] tablet1:pt-0 absolute right-0 tablet1:relative tablet1:left-0 tablet1:w-[650px] mobile1:w-[95%]">
              <h1 className="text-black text-[60px] xl3:text-[50px] mobile:text-[40px] tablet1:pl-10  capitalize">
                order summary
              </h1>
              <div className=" w-auto ">
                <table className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] rounded-tl-[35px] tablet1:rounded-tl-none tablet1:rounded-tr-[35px] tablet1:w-[650px] mobile1:w-auto">
                  {order_summary.map((order_summary, index) => {
                    {
                      if (index === 0) {
                        return (
                          <tr key={index} className="">
                            <td className="pt-10 pl-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-10 pl-10  text-right uppercase font-medium text-white text-[20px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "total weight:") {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 pb-0 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-5 pl-[95px] pb-0 text-right font-medium text-white text-[20px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index] + " kg"}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "shipping fee:") {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 pb-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-5 pl-[95px] pb-10 text-right uppercase font-medium text-white text-[12px] tablet1:text-[20px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "total") {
                        return (
                          <tr
                            key={index}
                            className="border-y-[1px] border-blackOpac"
                          >
                            <td className="py-5 pl-10 pb-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="py-0 pl-10 text-right  font-medium text-white text-[20px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index] + " Rs"}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "coupon") {
                        return (
                          <tr
                            key={index}
                            className="border-t-[1px] border-blackOpac pb-5"
                          >
                            <td className="py-7 pl-10 pb-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-0 pl-10 text-right uppercase font-medium text-white text-[20px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-5 pl-10 text-right uppercase font-medium text-white text-[20px] pr-5 tablet1:pr-20 mobile1.1:pr-12">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      }
                    }
                  })}
                </table>
                <div className="flex gap-2 bg-gradient-to-tl from-[#000] to-[#b58126] rounded-bl-[25px] tablet1:rounded-br-[25px] tablet1:rounded-bl-none mt-5 justify-center text-white text-[25px] py-[15px]">
                  <div className="uppercase">
                    <a className="cursor-pointer">Next</a>
                  </div>
                  <div className="text-white text-[35px] mt-[2px] cursor-pointer">
                    <MdKeyboardArrowRight />
                  </div>
                </div>
                <div className="text-[16 px] pt-5 tablet1:ml-10 text-[#545454] font-semibold ">
                  By Clicking NEXT I agree to Venture Game's terms of services
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex mobile2:grid gap-7 mobile2:gap-1 text-center text-[45px] pr-10 text-[#868686] justify-center pt-[500px] h-[125vh]">
            Cart is empty !{" "}
            <Link href="/shop">
              <div className="flex gap-1">
                <a className=" text-white cursor-pointer">Shop Now</a>
                <div className="text-white font-normal mt-3 cursor-pointer">
                  <MdDoubleArrow />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
