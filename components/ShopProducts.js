import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import FeaturedCard from "./FeaturedCard";
// import SaleCard from './SaleCard'

export default function ShopProducts({ handle }) {
  const n = 12;
  const icons = "text-[35px] 2xl:text-[25px] lg:text-[21px] text-white";
  const buttons =
    "text-white border-[1px] font-semibold border-white rounded-lg text-[25px] px-2 w-40 py-1 hover:bg-white hover:text-black hover:border-black focus:bg-white focus:text-black focus:border-black";

  const type = ["PS5", "PS4", "XBOX", "Nintendo"];
  const genre = ["Action", "Adventure", "Thriller", "Driving"];
  const category = ["Online", "Offline"];

  return (
    <div className="bg-[#FFB636] ">
      <div className="bg-[url('../images/background.png')] bg-[length:1700px_1800px] bg-no-repeat bg-[left_15vw_top_5rem]">
        <div className="flex pt-[10%]">
          {handle && (
            <div
              className={` bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] px-[60px] mt-[0%] tablet:hidden h-[1300px] rounded-tr-[70px] rounded-br-[70px]`}
            >
              <div className="flex gap-4 justify-center my-7">
                <div className={icons}>
                  <BsSliders />
                </div>
                <div className="text-[35px] text-white mt-[-7px] lg:mt-[-5px]">
                  Filter
                </div>
              </div>

              <div className="border-t-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {type.map((type, index) => (
                    <button key={index} className={buttons}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-y-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {genre.map((genre, i) => (
                    <button key={i} className={buttons}>
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-b-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {category.map((category, ind) => (
                    <button key={ind} className={buttons}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-wrap justify-start gap-5 text-center mx-[6%] mobile1.1:ml-0 tablet:justify-evenly mt-[0%] mb-[5%]">
            {[...Array(n)].map((user) => (
              <div key={user}>
                <FeaturedCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
