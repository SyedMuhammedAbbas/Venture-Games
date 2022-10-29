import Link from "next/link";
import { AddToCart } from "../../features/counter/cartSlice";
import { useDispatch } from "react-redux";
import Router from "next/router";

export default function SaleCard({ product }) {
  // const dispatch = useDispatch();
  // const handleAddtoCart = (product) => {
  //   dispatch(AddToCart(product));
  // };

  const data = product._id;
  function sendProps() {
    Router.push({
      pathname: `/product/${data}`,
    });
  }
  return (
    <div className="w-[350px] mobile1.1:w-[370px]">
      <div className="h-auto p-2 m-auto rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile1:w-auto tablet1:mx-1">
        <div className="relative text-center h-[400px]">
          <img
            className="rounded-3xl h-[380px] object-cover w-[350px]"
            src={product.Images[0]}
          />
          <div className="absolute left-2 bottom-6">
            <div className="grid w-[350px]">
              <div className="absolute right-10 bottom-7 bg-black bg-opacity-60 rounded-md px-2 grid gap-0 ">
                <div className="text-red-600 font-bold line-through text-[20px]">
                  {product.OldPrice}
                </div>
                <div className="text-white font-bold  text-[27px]">
                  {product.Price}
                </div>
              </div>
              <div className="flex gap-1 overflow-x-scroll desp-scroll w-[330px]">
                {product.ProductGroup.AvailablePlatforms.map(
                  (product_platform, index) => (
                    <button
                      key={index}
                      className="text-black font-bold py-[1px] uppercase bg-[#FFB636] px-3 rounded-md text-[14px]"
                    >
                      {product_platform.Title}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-2  overflow-y-hidden">
          <div className="grid text-center overflow-y-scroll desp-scroll h-[35px]">
            <div className="text-white text-[23px] mt-0">{product.Title}</div>
          </div>
          <div className="flex justify-center pl-4 gap-2 mt-5 pb-5">
            {/* <button
              onClick={() => handleAddtoCart(product)}
              className="text-white border-[1px] font-semibold border-white rounded-lg text-[14px] px-8 py-1 hover:bg-white hover:text-black hover:border-black"
            >
              <Link href="/cart">
                <a>Buy Now</a>
              </Link>
            </button> */}
            {/* <Link href={`/product/${data}`}> */}
            <button
              onClick={() => sendProps()}
              className="text-white border-[1px] font-semibold border-white rounded-lg text-[16px] tracking-wider px-2 py-1 hover:bg-white hover:text-black hover:border-black"
            >
              <a>Learn More</a>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
