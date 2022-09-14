import { MdKeyboardArrowRight } from "react-icons/md";
import FeaturedCard from "./FeaturedCard";
import Spiderman from "../images/image 4.png";

export default function Featured() {
  const featured_products = [
    {
      product_title: "Spiderman - Miles Morales",
      old_price: 15999,
      new_price: 11999,
      product_platform: ["ps4", "ps5", "xbox", "nintendo"],
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      old_price: 12000,
      new_price: 8000,
      product_platform: ["ps4", "nintendo"],
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      old_price: 16999,
      new_price: 12999,
      product_platform: ["ps4", "ps5"],
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      old_price: 15999,
      new_price: 11999,
      product_platform: ["xbox", "nintendo"],
      product_image: Spiderman.src,
    },
  ];

  return (
    <div className="grid bg-[#FFB636] p-32 2xl:px-20 xl1:px-10 tablet2.1:px-0 2xl:py-7 tablet:py-5 border-b-black border-b-8">
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
      <div className="flex flex-wrap gap-10 justify-center xl:justify-start xl:ml-[6%] mt-[30px] mobile2:justify-center mobile2:ml-0 mobile:mt-[70px] mobile1.1:mt-[80px]">
        {featured_products.map((index) => (
          <div key={index}>
            <FeaturedCard
              title={index.product_title}
              oldPrice={index.old_price}
              newPrice={index.new_price}
              image={index.product_image}
              platform={index.product_platform}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
