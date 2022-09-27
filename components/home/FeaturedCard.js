// import Spiderman from "../images/image 4.png";
import Link from "next/link";
// import { CartState } from "../../context/Context";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../features/counter/cartSlice";
// import { useLocation } from "react-router-dom";
import Router from "next/router";

export default function FeaturedCard({ product }) {
  // const featured_product_platform = ["ps4", "ps5", "xbox", "nintendo"];
  const dispatch = useDispatch();
  const handleAddtoCart = (product) => {
    dispatch(AddToCart(product));
  };
  // const location = useLocation();
  // const id = pathname.split("/")[2];
  // console.log(product);

  // const handleViewProd = (products) => {
  //   dispatch(ViewProduct(products));
  // };
  function sendProps() {
    Router.push({ pathname: "/product", query: { ...product } });
  }
  return (
    <div className="h-[500px] p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile:w-[350px]">
      <img
        className="rounded-3xl justify-center h-[340px] object-cover w-[340px] mobile:w-[330px]"
        src={product.product_image}
      />
      <div className="flex gap-1 mt-[-30px] ml-[10px]">
        {product.product_platform &&
          product.product_platform.map((product_platform, index) => (
            <button
              key={index}
              className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]"
            >
              {product_platform}
            </button>
          ))}
      </div>

      <div className="grid justify-center gap-3">
        <div className="text-white text-center text-[23px] h-8 overflow-auto desp-scroll mobile:text-[20px] mt-5">
          {product.product_title}
        </div>
        <div className="flex gap-5 justify-center">
          <div className="text-red-600 line-through text-[25px] mobile:text-[19px]">
            {product.product_oldprice}
          </div>
          <div className="text-white text-[25px] mobile:text-[21px]">
            {product.product_newprice} PKR
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-[-7px] mb-5">
          <button
            onClick={() => sendProps()}
            className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-8 py-1 hover:bg-white hover:text-black hover:border-black"
          >
            {/* <Link href={"/product/[id]"} as={`/product/${product.id}`}> */}
            <a>View</a>
            {/* </Link> */}
          </button>

          <button
            onClick={() => handleAddtoCart(product)}
            className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-4 py-1 hover:bg-white hover:text-black hover:border-black"
          >
            <a>Add to cart</a>
          </button>
        </div>
      </div>
    </div>
  );
}
