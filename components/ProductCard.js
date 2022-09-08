import Spiderman from "../images/image 4.png";
import Teen from "../images/teenesbr.png";
import { useState } from "react";

export default function ProductCard() {
  return (
    <div className="bg-[#FFB636] pt-[15%] pb-[5%] mx-auto lg:pt-[80px] tablet:pt-[50px]">
      <div className="flex justify-center">
        <img
          className="w-[550px] h-[550px] z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet1:w-[330px] tablet1:h-[330px]  tablet2:w-[450px] tablet2:h-[450px] tablet2:justify-center mobile:w-[80vw] mobile:h-[80vw] mobile:ml-auto mobile2:mr-[35px] mobile1:w-[330px] mobile1:h-[330px] mobilesm:w-[250px] mobilesm:h-[250px] mobile1:ml-auto"
          src={Spiderman.src}
        ></img>
        <div className="grid gap-4 h-[500px] ml-[-20px] mt-[1.5%] bg-gradient-to-b from-[#000000] via-[#494949] to-[#000000] pl-[40px] w-[800px] rounded-tr-[45px] rounded-br-[45px]">
          <div className="pl-[75%] mt-[20px] mb-[-25px]">
            <div className="flex gap-1 p-0 w-[150px] rounded-2xl h-[30px] bg-[#FFB636]">
              <button className="text-black bg-transparent text-[20px] m-0 mt-[0px]  focus:font-semibold focus:text-[#FFB636] focus:bg-gradient-to-r from-[#000000] via-[#2d2d2d] to-[#000000]  transition-all  w-[75px] px-2 rounded-2xl border-[1px] border-[#FFB636]">
                New
              </button>
              <button className="text-black bg-transparent text-[20px] m-0 mt-[0px] focus:font-semibold transition-all focus:text-[#FFB636] focus:bg-gradient-to-r from-[#000000] via-[#2d2d2d] to-[#000000] w-[75px] px-2 rounded-2xl border-[1px] border-[#FFB636]">
                Used
              </button>
            </div>
          </div>
          <div className="text-white text-[35px] font-semibold">
            Spiderman - Miles Morales
          </div>
          <div className="flex gap-1">
            <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black">
              PS4
            </button>
            <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black">
              PS5
            </button>
            <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black">
              XBOX
            </button>
          </div>
          <div className="grid">
            <div className="flex">
              <div className="text-gray-400 text-[25px]">
                Action <span className="">. </span>
              </div>
              <div className="text-gray-400 text-[25px]">
                Thriller <span className="">. </span>
              </div>
              <div className="text-gray-400 text-[25px]">Story</div>
            </div>
            <div className="text-gray-400 text-[25px]">
              Single Player <span className="">.</span> 2020
            </div>
          </div>
          <div className="text-white">
            Experience The Rise Of Miles Morales As The New Hero <br /> Masters
            Incredible, Explosive New Powers To Become <br />
            His Own Spider-Man.
          </div>
          <div className="flex gap-5 border-y-2 border-gray-600 w-[250px] pt-1">
            <div className="text-red-600 line-through text-[23px]">15,999</div>
            <div className="border-r-2 border-gray-600 h-5 mt-3"></div>
            <div className="text-white text-[25px]">11,999 PKR</div>
          </div>

          <div>
            <div className="flex gap-2">
              <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black cursor-pointer">
                Buy Now
              </button>
              <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black ">
                Add to Cart
              </button>
            </div>

            <div className="relative pl-[85%] mt-[-90px] bottom-[40px]">
              <img className="w-[70px]" src={Teen.src}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
