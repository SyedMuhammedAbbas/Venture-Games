import { AiOutlineDelete } from "react-icons/ai";

export default function CartItems({
  product_title,
  product_platform,
  product_condition,
  product_newprice,
  product_image,
  product_weight,
}) {
  const Number_Of_products = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <tr className="border-b-[1px] border-[#626262] pb-10">
        <td className="p-20 py-10 px-5 mobile1.1:pr-0 pl-10 mobile1:pl-5 mobile1.1:w-[100px]">
          <div className="flex gap-4 text-center xl3:grid xl3:gap-1 xl3:text-left">
            <img
              className="w-[170px] bg-contain mobile1.1:w-[150px] rounded-3xl"
              src={product_image}
            ></img>
            <div className="grid h-[50px] xl3:h-auto xl3:w-auto">
              <div className="text-white text-[25px] overflow-auto h-20 mobile1.1:text-[20px] pt-auto pb-4 ">
                {product_title}
              </div>
              <div className="border-b-[1.5px] border-[#6f6f6f] w-[200px]"></div>
              <div className="flex gap-2 pt-4 w-[200px]">
                <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black">
                  {product_platform}
                </button>
                <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1.1:h-auto mobile1.1:py-[1px] rounded-md text-[14px] bg-[#FFB636] text-black">
                  {product_condition}
                </button>
                <button className="text-[30px] text-[#FFB636] ml-10">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        </td>
        <td className="pl-5 mt-[100%] text-center">
          <select
            name="1"
            className="border-[1px] rounded-xl text-white bg-transparent p-1 px-4 text-[20px]"
          >
            {Number_Of_products.map((Number_Of_products, index) => (
              <option
                key={index}
                className="text-black bg-transparent text-[20px]"
              >
                {Number_Of_products}
              </option>
            ))}
          </select>
        </td>
        <td className="pl-20 xl3:pl-10 mobile1.1:pl-4 ">
          <h2 className="text-white text-[27px] mobile1:text-[20px]">
            {product_newprice} <span className="text-[15px]">Rs</span>
          </h2>
        </td>
      </tr>
    </>
  );
}
