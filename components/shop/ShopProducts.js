import { useState, useEffect } from "react";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import FeaturedCard from "../home/FeaturedCard";
// import Spiderman from "../../images/image 4.png";
// import { Allproductsdata } from "../common/AllProductsData";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../features/counter/productsSlice";

export default function ShopProducts({ handleFilter, handleSort }) {
  const Products = useSelector((state) => state.products.allProducts);
  const icons = "text-[35px] 2xl:text-[25px] lg:text-[21px] text-white";
  const buttons =
    "text-white uppercase border-[1px] font-semibold border-white rounded-lg text-[25px] px-2 w-40 py-1 hover:bg-white hover:text-black hover:border-black focus:bg-white focus:text-black focus:border-black";

  const type = ["ps5", "ps4", "xbox", "nintendo"];
  const genre = ["action", "adventure", "thriller", "driving"];
  const category = ["online", "offline"];
  const sortbyprice = ["Low to High", "High to Low"];

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  return (
    <div className="bg-[#FFB636] ">
      <div className="bg-[url('../images/background.png')] bg-[length:1700px_1800px] bg-no-repeat bg-[left_15vw_top_0rem]">
        <div className="flex pt-[10%] pb-[5%]">
          {/* {handleFilter && ( */}
          <div
            className={
              handleFilter
                ? "bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] transition duration-300 ease-in-out opacity-100 px-[60px] mt-[0%] tablet:hidden h-[1300px] rounded-tr-[70px] rounded-br-[70px]"
                : "hidden"
            }
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
                  <button value={type} key={index} className={buttons}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-y-[3px] border-blackOpac">
              <div className="grid items-start gap-4 mr-[120px] py-10">
                {genre.map((genre, i) => (
                  <button value={genre} key={i} className={buttons}>
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b-[3px] border-blackOpac">
              <div className="grid items-start gap-4 mr-[120px] py-10">
                {category.map((category, ind) => (
                  <button value={category} key={ind} className={buttons}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* )} */}

          {handleSort && (
            <div
              className={` bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] transition duration-300 ease-in-out px-[60px] mt-[0%] tablet:hidden h-[1300px] rounded-tr-[70px] rounded-br-[70px]`}
            >
              <div className="flex gap-4 justify-center my-7">
                <div className={icons}>
                  <BsSortDown />
                </div>
                <div className="text-[35px] text-white mt-[-7px] lg:mt-[-5px]">
                  Sort
                </div>
              </div>

              <div className="border-t-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {sortbyprice.map((sortbyprice, index) => (
                    <button value={sortbyprice} key={index} className={buttons}>
                      {sortbyprice}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-wrap justify-center mx-auto gap-5 text-center mb-[5%]">
            {Object.values(Products).map((currentItem) => (
              <FeaturedCard key={currentItem} product={currentItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
