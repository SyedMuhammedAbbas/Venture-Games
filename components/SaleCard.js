import Spiderman from "../images/image 4.png";
import Link from "next/link";

export default function SaleCard({
  title,
  platform,
  image,
  desp,
  oldPrice,
  newPrice,
}) {
  return (
    <div className="w-[350px] mobile1.1:w-[370px]">
      <div className="h-auto p-2 m-auto rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile1:w-auto tablet1:mx-1">
        <div className="relative text-center h-[400px]">
          <img
            className="rounded-3xl h-[400px]  object-cover w-[350px] mobile1:w-auto"
            src={image}
          />
          <div className="absolute left-2 bottom-2">
            <div className="grid w-[350px]">
              <div className="absolute right-10 bottom-7  grid gap-0 ">
                <div className="text-red-600 font-bold  line-through text-[20px]">
                  {oldPrice}
                </div>
                <div className="text-white font-bold text-[27px]">
                  {newPrice}
                </div>
              </div>
              <div className="flex gap-1 overflow-x-scroll desp-scroll w-[330px]">
                {platform.map((platform, index) => (
                  <button
                    key={index}
                    className="text-black font-bold py-[1px] uppercase bg-[#FFB636] px-3 rounded-md text-[14px]"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-2  overflow-y-hidden">
          <div className="grid mt-4 overflow-y-scroll desp-scroll h-[100px]">
            <div className="text-white text-[23px] mt-0">{title}</div>
            <div className="text-white text-[14px]">{desp}</div>
          </div>
          <div className="flex pl-4 gap-2 mt-[7px] pb-5">
            <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[14px] px-8 py-1 hover:bg-white hover:text-black hover:border-black">
              <Link href="/product">
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
