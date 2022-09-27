import Teen from "../../images/teenesbr.png";
import { useState } from "react";
import toggel from "../../styles/Toggel.module.css";
import { Allproductsdata } from "../../components/common/AllProductsData";
import { useRouter } from "next/router";

export default function Product() {
  // console.log(product);
  const router = useRouter();
  const query = router.query;
  const productId = parseInt(query.id);
  const product = Allproductsdata[productId];
  return !product ? (
    <div>Product Not Found</div>
  ) : (
    <div className="bg-[#FFB636] pt-[15%] pb-[5%] mx-auto lg:pt-[15%] mobile1:pt-[20%] h-[100%] tablet3:h-[100%] mobile2:h-[100%]   flex justify-center items-center align-middle">
      <div className="flex justify-center ">
        <img
          className="w-[550px] h-[550px] bg-[#606060] z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet:w-[330px] tablet:h-[330px] tablet2:justify-center"
          src={product.product_image}
        ></img>
        <div className="grid gap-0 h-[500px] xl:h-[400px] tablet:h-[500px] tablet3:h-[100%] mobile2:h-[650px] mobile1:h-[100%] ml-[-20px] tablet:ml-[-90px] mobile2:ml-[-200px] mobile1:ml-[-300px] mt-[1.5%] tablet:mt-[10%] mobile2:mt-[34%] bg-gradient-to-b from-[#000000] via-[#282828] to-[#000000] pl-[40px] w-[800px] tablet3:w-[500px] mobile1:w-[400px] rounded-tr-[45px] rounded-br-[45px] tablet:rounded-bl-[45px]">
          <div className="tablet:pl-[90px] mobile2:pl-10 mobile1:pl-0 tablet:py-10 mobile1:pt-20">
            <div className=" tablet3:grid tablet3:gap-12 mobile2:gap-14 mobile1:gap-14 mobile1:pt-20">
              <div className="pl-[60%] tablet3:pl-[30%] mt-[20px] mb-[-25px] tablet3:mt-[10px]">
                <input type="checkbox" className={toggel.input}></input>
              </div>
              <div className="w-[300px] overflow-y-scroll desp-scroll mt-[-10%] xl:mt-[-15%] mobile1:mt-[-17%]">
                <div className="text-white text-[35px] tablet:text-[30px] mobile1:text-[25px] tablet:w-[250px] mobile1:w-[300px] font-semibold ">
                  {product.product_title}
                </div>
                <div className="flex gap-1">
                  {product.product_platform &&
                    product.product_platform.map((product_platform, index) => (
                      <button
                        key={index}
                        className="text-[#FFB636] font-semibold bg-transparent  border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black"
                      >
                        {product_platform}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="overflow-y-scroll desp-scroll h-[150px] w-[350px] mt-4 xl:h-[100px] tablet3:w-[300px] mobile1:pt-2">
              <div className="grid">
                <div className="grid gap-5 xl:gap-2 mobile1:gap-0">
                  <div className="flex">
                    {product.product_genre &&
                      product.product_genre.map((product_genre, i) => (
                        <div
                          key={i}
                          className="text-gray-400 text-[25px] mobile1:text-[20px] capitalize"
                        >
                          {product_genre}{" "}
                          <span className="text-[40px] mobile1:text-[20px]">
                            .{" "}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="border-b-[2px] border-gray-400 w-[250px]"></div>
                </div>
                <div className="text-gray-400 text-[25px] mobile1:text-[20px] mobile1:pt-[-20px]">
                  Single Player <span className="text-[40px]">.</span> 2020
                </div>
              </div>
              <div className="text-white pt-0 pb-5">
                {product.product_description}
              </div>
            </div>
            <div className="flex gap-5 border-y-2 border-gray-600 w-[250px] mobile1:w-[300px] pt-1 xl:mt-5 mb-5">
              <div className="text-red-600 line-through text-[23px] mobile1:text-[20px]">
                {product.product_oldprice}
              </div>
              <div className="border-r-2 border-gray-600 h-5 mt-3"></div>
              <div className="text-white text-[25px] mobile1:text-[20px]">
                {product.product_newprice} PKR
              </div>
            </div>

            <div className="tablet:pb-[0px] tablet3:grid tablet3:gap-10">
              <div className="flex gap-2">
                <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black cursor-pointer">
                  Buy Now
                </button>
                <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black ">
                  Add to product
                </button>
              </div>

              <div className="relative pl-[85%] mt-[-90px] bottom-[40px] tablet:bottom-[0px] tablet3:mt-0 tablet3:bottom-4 tablet3:pl-[75%]">
                <img className="w-[70px] tablet3:w-[50px]" src={Teen.src}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps({ params: { id } }) {
//   const res = await fetch(`http://localhost:3000/products/${id}`);
//   //   const prod = {
//   const [prod, setProd] = useState({});
//   Allproductsdata.map((index) => {
//     if (id === index.id) {
//       return setProd(index.id);
//     }
//   });
//   //   }
//   //   const data = await res.text();
//   return { props: { product: prod } };
// }
