import Link from "next/link";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../features/counter/cartSlice";
import Router from "next/router";

export default function FeaturedCard({ product }) {
  const dispatch = useDispatch();
  const handleAddtoCart = (product) => {
    dispatch(AddToCart(product));
  };
  function sendProps() {
    Router.push({ pathname: "/product", query: { id: product.id } });
  }
  console.log(product);
  // const values = Object.values(product);
  // const product = values[0];
  return (
    <div className="h-[500px] p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile:w-[350px]">
      <img
        className="rounded-3xl flex justify-center h-[340px] object-contain w-[340px] mobile:w-[330px]"
        src={product[0].Images}
      />
      <div className="flex gap-1 mt-[-30px] ml-[10px]">
        {Object.values(product) &&
          Object.values(product).map((Platform, index) => (
            <button
              key={index}
              className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]"
            >
              {Platform.Title}
            </button>
          ))}
      </div>
      {/* <div className="flex gap-1 mt-[-30px] ml-[10px]">
        <button className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]">
          {Object.values(product.Platform.Title)}
        </button>
      </div> */}
      <div className="grid justify-center gap-3">
        <div className="text-white text-center text-[23px] h-8 overflow-auto desp-scroll mobile:text-[20px] mt-5">
          {product[0].Title};
        </div>
        <div className="flex gap-5 justify-center">
          <div className="text-red-600 line-through text-[25px] mobile:text-[19px]">
            {product[0].Price}
          </div>
          <div className="text-white text-[25px] mobile:text-[21px]">
            {product[0].Price} PKR
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-[-7px] mb-5">
          <button
            onClick={() => sendProps()}
            className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-8 py-1 hover:bg-white hover:text-black hover:border-black"
          >
            <a>View</a>
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
