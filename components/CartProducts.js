import Spiderman from "../images/image 4.png";
// import { Select, Option } from "@material-tailwind/react";

export default function CartProducts() {
  const productTitle = "Spiderman - Miles Morales";
  const product_platform = ["PS4", "xbox", "PS5", "nintendo"];
  const condition = ["NEW", "USED"];
  const Number_Of_products = [1, 2, 3, 4, 5, 6, 7];
  const price = ["15,000", "12,000"];

  return (
    <>
      <div className="flex bg-transparent">
        <img className="w-[200px] rounded-md" src={Spiderman.src}></img>
        <div className="grid">
          <div className="text-white text-[25px]">{productTitle}</div>
          <div className="flex gap-2">
            <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] bg-[#FFB636] text-black">
              {product_platform[0]}
            </button>
            <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] bg-[#FFB636] text-black">
              {condition[0]}
            </button>
          </div>
        </div>
        <div className="w-5">
          {/* <Select label="1" className="w-4">
            {Number_Of_products.map((Number_Of_products, index) => (
              <Option key={index}>{Number_Of_products}</Option>
            ))}
          </Select> */}
          <select name="1" id="cars">
            {Number_Of_products.map((Number_Of_products, index) => (
              <option key={index}>{Number_Of_products}</option>
            ))}
            {/* <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option> */}
          </select>
        </div>
      </div>
    </>
  );
}
