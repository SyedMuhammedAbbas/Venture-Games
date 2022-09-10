import { MdKeyboardArrowRight } from "react-icons/md";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  return (
    <div className="grid bg-[#FFB636] p-32 2xl:px-20 snap-start xl1:px-10 tablet2.1:px-0 2xl:py-7 tablet:py-5 border-b-black border-b-8">
      <div className="flex">
        <div className="font-hemi text-black text-[80px] 2xl:text-[60px] lg:text-[40px] mobile1.1:text-[30px] lg:ml-5 ">
          Featured Products
        </div>
        <div className="absolute right-[7%] mt-10 lg:mb-5">
          <button className="flex text-black text-[30px] lg:text-[20px] mobile:mt-10">
            View all
            <div className="mt-0 text-[50px] lg:text-[35px]">
              <MdKeyboardArrowRight />
            </div>
          </button>
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-[30px] tablet2.1:grid mobile:mt-[70px] mobile1.1:mt-[80px]">
        <div>
          <FeaturedCard />
        </div>
        <div>
          <FeaturedCard />
        </div>
        <div className="xl2:hidden">
          <FeaturedCard />
        </div>
        <div className="5.1xl:hidden">
          <FeaturedCard />
        </div>
      </div>
    </div>
  );
}
