// import Spiderman from "../../images/image 4.png";
import Link from "next/link";

export default function SaleCard({
  product_title,
  product_platform,
  product_image,
  product_description,
  product_oldprice,
  product_newprice,
}) {
  return (
    <div className="w-[350px] mobile1.1:w-[370px]">
      <div className="h-auto p-2 m-auto rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile1:w-auto tablet1:mx-1">
        <div className="relative text-center h-[400px]">
          <img
            className="rounded-3xl h-[350px]  object-contain w-[350px] mobile1:w-auto"
            src={product_image}
          />
          <div className="absolute left-2 bottom-6">
            <div className="grid w-[350px]">
              <div className="absolute right-10 bottom-7  grid gap-0 ">
                <div className="text-red-600 font-bold  line-through text-[20px]">
                  {product_oldprice}
                </div>
                <div className="text-white font-bold text-[27px]">
                  {product_newprice}
                </div>
              </div>
              <div className="flex gap-1 overflow-x-scroll desp-scroll w-[330px]">
                {product_platform.map((product_platform, index) => (
                  <button
                    key={index}
                    className="text-black font-bold py-[1px] uppercase bg-[#FFB636] px-3 rounded-md text-[14px]"
                  >
                    {product_platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-2  overflow-y-hidden">
          <div className="grid overflow-y-scroll desp-scroll h-[60px]">
            <div className="text-white text-[23px] mt-0">{product_title}</div>
            <div className="text-white text-[14px]">{product_description}</div>
          </div>
          <div className="flex pl-4 gap-2 mt-5 pb-5">
            <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[14px] px-8 py-1 hover:bg-white hover:text-black hover:border-black">
              <Link href="/cart">
                <a>Buy Now</a>
              </Link>
            </button>
            <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[14px] px-4 py-1 hover:bg-white hover:text-black hover:border-black">
              <Link href="/product">
                <a>Learn More</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
