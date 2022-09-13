// import CartProducts from "./CartProducts";
import ProfileBar from "./ProfileBar";
import Spiderman from "../images/image 4.png";
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
      product_title: "Spiderman - Miles Morales",
      product_platform: "PS4",
      product_condition: "NEW",
      product_price: 15000,
      product_image: Spiderman.src,
      product_weight: 0.93,
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
  const Number_Of_products = [1, 2, 3, 4, 5, 6, 7];
  const product_count = 3;
  const total_items = products.length;
  // const total_amount = 0;
  const total_amount = products.reduce(
    (total_amount, { product_price }) => total_amount + product_price,
    0
  );
  const total_weight = products.reduce(
    (total_weight, { product_weight }) => total_weight + product_weight,
    0
  );
  const shipping_fee = "calculated at next step";
  const total_all = total_amount;
  const coupon = () => {
    return (
      <button className="border-[1px] border-white rounded-lg px-4 bg-transparent uppercase">
        Add
      </button>
    );
  };

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
    total_all,
    coupon(),
  ];

  return (
    <>
      <ProfileBar />
      <div className="bg-[#FFB636] pb-20 h-[100%]">
        {products.length > 0 ? (
          <div className="flex">
            <div className="pt-[13%] pb-[5%]">
              <h1 className="text-black text-[60px] pl-10 capitalize">
                Shopping Cart
              </h1>

              <div className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[900px] rounded-tr-[50px] rounded-br-[50px] ">
                <table>
                  <tr className=" text-white uppercase">
                    <th className="pl-[50px] pt-10 text-left text-[20px] font-normal">
                      description
                    </th>
                    <th className="pl-10 pt-10 text-left text-[20px] font-normal">
                      quantity
                    </th>
                    <th className="pl-20 pb-0 pt-10 text-left text-[20px] font-normal">
                      price
                    </th>
                  </tr>
                  {products.map((index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b-[1px] border-[#9c9c9c]"
                      >
                        <td className="p-20 py-10 px-5 pl-10">
                          <div className="flex gap-4">
                            <img
                              className="w-[170px] h-[170px] rounded-3xl"
                              src={index.product_image}
                            ></img>
                            <div className="grid h-[50px]">
                              <div className="text-white text-[25px] pt-[40px] pb-4 ">
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
                        <td className="flex justify-center pt-[106px]">
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
                        <td className="pl-20">
                          <h2 className="text-white text-[27px]">
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

            <div className="grid pt-[13%]">
              <h1 className="text-black text-[60px] absolute right-10 capitalize">
                order summary
              </h1>
              <div className=" w-auto absolute right-0 mt-24">
                <table className="bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] rounded-tl-[50px] ">
                  {order_summary.map((order_summary, index) => {
                    {
                      if (index === 0) {
                        return (
                          <tr key={index} className="">
                            <td className="pt-10 pl-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-10 pl-10 text-right uppercase font-medium text-white text-[20px] pr-5">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      } else if (order_summary === "shipping fee:") {
                        return (
                          <tr key={index} className="">
                            <td className="pt-5 pl-10 pb-10 uppercase font-medium text-white text-[20px]">
                              {order_summary}
                            </td>
                            <td className="pt-5 pl-[95px] pb-10 text-right uppercase font-medium text-white text-[12px] pr-5">
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
                            <td className="py-0 pl-10 text-right  font-medium text-white text-[20px] pr-5">
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
                            <td className="pt-0 pl-10 text-right uppercase font-medium text-white text-[20px] pr-5">
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
                            <td className="pt-5 pl-10 text-right uppercase font-medium text-white text-[20px] pr-5">
                              {order_summary_values[index]}
                            </td>
                          </tr>
                        );
                      }
                    }
                  })}
                </table>
                <div className="flex gap-2 bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] rounded-bl-[30px] mt-5 justify-center text-white text-[25px] py-[15px]">
                  <div className="uppercase">
                    <a className="cursor-pointer">Next</a>
                  </div>
                  <div className="text-white text-[35px] mt-[2px] cursor-pointer">
                    <MdKeyboardArrowRight />
                  </div>
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
