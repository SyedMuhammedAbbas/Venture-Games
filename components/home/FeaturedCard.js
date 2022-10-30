import Link from "next/link";
// import { useDispatch } from "react-redux";
import { AddToCart } from "../../features/counter/cartSlice";
import Router from "next/router";
// import { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export default function FeaturedCard({ product }) {
  // const dispatch = useDispatch();
  // const handleAddtoCart = (product) => {
  //   dispatch(AddToCart(product));
  // };

  const data = product._id;

  // console.log(data);

  // function sendProps() {
  //   // Router.push("/product" + data, "/product" + data, { shallow: true });
  //   Router.push({
  //     pathname: "/product",
  //     query: { id: product.ProductGroup._id },
  //   });
  // }
  // function sendProps() {
  //   Router.push({
  //     pathname: `/product/${data}`,
  //   });
  // }
  // const platforms = Object.values(product.ProductGroup.AvailablePlatforms).map(
  //   (index) => {
  //     return index.Title;
  //   }
  // );

  // console.log(platforms);
  return (
    <div className="h-[500px] p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile:w-[350px]">
      <img
        className="rounded-3xl flex justify-center h-[340px] object-cover w-[340px] mobile:w-[330px]"
        src={product.Images}
      />
      <div className="flex gap-1 mt-[-30px] ml-[10px]">
        {/* {Object.keys(product).forEach(([index, val]) => {
          <button className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]">
            {index[ProductGroup].map((i) => {
              return val[ProductGroup];
            })}
          </button>;
        })} */}
        {Object.values(product.ProductGroup.AvailablePlatforms).map((index) => {
          return (
            <button className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]">
              {index.Title}
            </button>
          );
        })}
      </div>
      <div className="grid justify-center gap-3">
        <div className="text-white text-center text-[23px] h-8 overflow-auto desp-scroll mobile:text-[20px] mt-5">
          {product.Title}
        </div>
        <div className="flex gap-5 justify-center">
          {product.OldPrice === undefined ? (
            ""
          ) : (
            <div className="text-red-600 line-through text-[25px] mobile:text-[19px]">
              {product.OldPrice}
            </div>
          )}
          <div className="text-white text-[25px] mobile:text-[21px]">
            {product.Price} PKR
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-[-7px] mb-5">
          <Link href={`/product/${data}`}>
            <button
              // onClick={() => sendProps()}
              className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-8 py-1 hover:bg-white hover:text-black hover:border-black"
            >
              <a>View</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
