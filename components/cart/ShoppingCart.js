// import CartProducts from "./CartProducts";
import ProfileBar from "../common/ProfileBar";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CartItems from "./CartItems";
import { productsdata } from "./CartProductsData";
import CheckOut from "./CheckOut";

export default function ShoppingCart() {
  const router = useRouter();

  const [item, setItem] = useState(productsdata);

  return (
    <>
      <ProfileBar />
      <div className="bg-[#FFB636] pb-20 h-[100%]">
        {item.length > 0 ? (
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
                    {item?.map((currentItem) => {
                      return <CartItems key={currentItem} {...currentItem} />;
                    })}
                  </table>
                </div>
                <div className="text-right text-[25px] mobile1.1:text-[20px] py-7 pr-10 text-[#979797]">
                  Cart feels empty?
                  <a
                    onClick={() => router.push("/shop")}
                    className="underline text-white cursor-pointer"
                  >
                    Shop More
                  </a>
                </div>
              </div>
            </div>

            <CheckOut />
          </div>
        ) : (
          <div className="flex mobile2:grid gap-7 mobile2:gap-1 text-center text-[45px] pr-10 text-[#868686] justify-center pt-[500px] h-[125vh]">
            Cart is empty !
            <div className="flex gap-1" onClick={() => router.push("/shop")}>
              <Link href="/shop">
                <a className=" text-white cursor-pointer">Shop Now</a>
              </Link>
              <div className="text-white font-normal mt-3 cursor-pointer">
                <MdDoubleArrow />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
