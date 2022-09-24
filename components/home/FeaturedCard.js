// import Spiderman from "../images/image 4.png";
import Link from "next/link";

export default function FeaturedCard({
  product_title,
  product_oldprice,
  product_newprice,
  product_image,
  product_platform,
}) {
  // const featured_product_platform = ["ps4", "ps5", "xbox", "nintendo"];

  return (
    <div className="h-auto p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile:w-[350px]">
      <img
        className="rounded-3xl justify-center h-[340px] object-contain w-[340px] mobile:w-[330px]"
        src={product_image}
      />
      <div className="flex gap-1 mt-[-30px] ml-[10px]">
        {product_platform &&
          product_platform.map((product_platform, index) => (
            <button
              key={index}
              className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]"
            >
              {product_platform}
            </button>
          ))}
      </div>

      <div className="grid justify-center gap-3">
        <div className="text-white text-center text-[23px] mobile:text-[20px] mt-5">
          {product_title}
        </div>
        <div className="flex gap-5 justify-center">
          <div className="text-red-600 line-through text-[25px] mobile:text-[19px]">
            {product_oldprice}
          </div>
          <div className="text-white text-[25px] mobile:text-[21px]">
            {product_newprice} PKR
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-[-7px] mb-5">
          <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-8 py-1 hover:bg-white hover:text-black hover:border-black">
            <Link href="/product">
              <a>View</a>
            </Link>
          </button>
          <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-4 py-1 hover:bg-white hover:text-black hover:border-black">
            <Link href="/cart">
              <a>Add to cart</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
