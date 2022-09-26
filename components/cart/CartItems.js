// import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
// import { CartContext } from "./ShoppingCart";
import { CartState } from "../../context/Context";

export default function CartItems({ products }) {
  // const Number_Of_products = [1, 2, 3, 4, 5, 6, 7];
  const {
    state: { Cart },
    dispatch,
  } = CartState();
  return (
    <>
      <tr className="border-b-[1px] border-[#626262] pb-10">
        <td className="p-20 py-10 px-5 mobile1.1:pr-0 pl-10 mobile1:pl-5 mobile1.1:w-[100px]">
          <div className="flex gap-4 text-center xl3:grid xl3:gap-1 xl3:text-left">
            <img
              className="w-[170px] bg-contain mobile1.1:w-[150px] rounded-3xl"
              src={products.product_image}
            ></img>
            <div className="grid h-[50px] xl3:h-auto xl3:w-auto">
              <div className="text-white text-[25px] overflow-auto desp-scroll h-20 mobile1.1:text-[20px] pt-auto pb-4 ">
                {products.product_title}
              </div>
              <div className="border-b-[1.5px] border-[#6f6f6f] w-[200px]"></div>
              <div className="flex gap-2 pt-4 w-[200px]">
                {products.product_platform &&
                  products.product_platform.map((product_platform, index) => (
                    <button
                      key={index}
                      className="font-semibold uppercase border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black"
                    >
                      {product_platform}
                    </button>
                  ))}
                <button className=" font-semibold uppercase border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black">
                  {products.product_condition}
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: products });
                  }}
                  className="text-[30px] text-[#ffffff] hover:text-[#FFB636] ml-10"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        </td>
        <td className="pl-5 mt-[100%] text-center">
          <select
            as="select"
            value={products.qty}
            className="border-[1px] rounded-xl text-white bg-transparent p-1 px-4 text-[20px]"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: { id: products.product_id, qty: e.target.value },
              })
            }
          >
            {[...Array(products.product_quantity).keys()].map((index) => (
              <option
                key={index + 1}
                className="text-black bg-transparent text-[20px]"
              >
                {index + 1}
              </option>
            ))}
          </select>
        </td>
        <td className="pl-20 xl3:pl-10 mobile1.1:pl-4 ">
          <h2 className="text-white text-[27px] mobile1:text-[20px]">
            {products.product_newprice} <span className="text-[15px]">Rs</span>
          </h2>
        </td>
      </tr>
    </>
  );
}
