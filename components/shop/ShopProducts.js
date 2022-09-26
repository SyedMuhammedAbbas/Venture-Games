import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import FeaturedCard from "../home/FeaturedCard";
// import SaleCard from './SaleCard'
import Spiderman from "../../images/image 4.png";
// import { Allproductsdata } from "../common/AllProductsData";
import { CartState } from "../../context/Context";

export default function ShopProducts({
  handleFilter,
  handleSort,
  Cart,
  setCart,
}) {
  // const n = 12;
  const icons = "text-[35px] 2xl:text-[25px] lg:text-[21px] text-white";
  const buttons =
    "text-white border-[1px] font-semibold border-white rounded-lg text-[25px] px-2 w-40 py-1 hover:bg-white hover:text-black hover:border-black focus:bg-white focus:text-black focus:border-black";

  const type = ["PS5", "PS4", "XBOX", "Nintendo"];
  const genre = ["Action", "Adventure", "Thriller", "Driving"];
  const category = ["Online", "Offline"];
  // const [Cart, setCart] = useState([]);
  const sortbyprice = ["Low to High", "High to Low"];

  const n = 4;
  // const [AllItem, setAllItem] = useState(Allproductsdata);
  const {
    state: { Allproductsdata },
  } = CartState();
  console.log(Allproductsdata);
  return (
    <div className="bg-[#FFB636] ">
      <div className="bg-[url('../images/background.png')] bg-[length:1700px_1800px] bg-no-repeat bg-[left_15vw_top_0rem]">
        <div className="flex pt-[10%] pb-[5%]">
          {handleFilter && (
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

          {handleSort && (
            <div
              className={` bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] px-[60px] mt-[0%] tablet:hidden h-[1300px] rounded-tr-[70px] rounded-br-[70px]`}
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
                    <button key={index} className={buttons}>
                      {sortbyprice}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-wrap justify-start ml-[5%] xl2:ml-[10%] mobile2:ml-auto mobile2:justify-center gap-5 text-center mb-[5%]">
            {Allproductsdata.map((currentItem) => (
              <FeaturedCard
                key={currentItem}
                products={currentItem}
                Cart={Cart}
                setCart={setCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
