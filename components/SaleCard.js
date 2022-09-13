import Spiderman from "../images/image 4.png";
import Link from "next/link";

export default function SaleCard() {
  const platforms = ["PS4", "PS5", "XBOX"];
  return (
    <div className="w-[370px]">
      <div className="h-auto p-2 m-auto rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile1:w-auto tablet1:mx-1">
        <div>
          <img
            className="rounded-3xl h-[400px]  object-cover w-[350px] mobile1:w-auto"
            src={Spiderman.src}
          />
          <div className="flex ml-[10px] mt-[-25px]">
            <div className="flex gap-1">
              {platforms.map((platforms, index) => (
                <button
                  key={index}
                  className="text-black font-semibold h-4 mobile:h-5 bg-[#FFB636] px-3  rounded-md text-[12px]"
                >
                  {platforms}
                </button>
              ))}
            </div>
            <div className="grid gap-0 mt-[-17%] pl-[80px] mobile:pl-[60px] mobile1:pl-[20px]">
              <div className="text-red-600 text-right line-through text-[20px]">
                15,999
              </div>
              <div className="text-white text-[27px]">11,999</div>
            </div>
          </div>
        </div>

        <div className="grid gap-2 pl-4 overflow-y-hidden">
          <div className="grid mt-4 overflow-y-scroll h-[100px]">
            <div className="text-white text-[23px] mt-0">
              Spiderman - Miles Morales
            </div>
            <div className="text-white text-[14px]">
              Experience the Rise Of Miles Morales As The New Hero Masters
              Incredible, Explosive New Powers To Become His Own Spider-Man.
              Experience the Rise Of Miles Morales As The New Hero Masters
              Incredible, Explosive New Powers To Become His Own Spider-Man.
            </div>
          </div>
          <div className="flex  gap-2 mt-[7px] pb-5">
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
