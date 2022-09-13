import CartProducts from "./CartProducts";
import ProfileBar from "./ProfileBar";
import Spiderman from "../images/image 4.png";

export default function ShoppingCart() {
  const productTitle = "Spiderman - Miles Morales";
  const product_platform = ["PS4", "xbox", "PS5", "nintendo"];
  const condition = ["NEW", "USED"];
  const Number_Of_products = [1, 2, 3, 4, 5, 6, 7];
  const price = ["15,000", "12,000"];
  return (
    <>
      <ProfileBar />
      <div className="bg-[#FFB636] h-[100%] ">
        <div className="pt-[15%]">
          <h1 className="text-black text-[70px]">Shopping Cart</h1>
          {/* <div className="bg-gradient-to-tr from-[#573d0f] via-black to-[#573d0f]">
            <ul className="flex pl-[2%] text-white uppercase gap-[20%]">
              <li>description</li>
              <ul className="flex gap-8">
                <li>quantity</li>
                <li>price</li>
              </ul>
            </ul>
            <div>
              <CartProducts />
            </div>
          </div> */}
          <div>
            <table className="bg-gradient-to-tr from-[#573d0f] via-black to-[#573d0f] ">
              <tr className=" text-white uppercase ">
                <th>description</th>
                <th>quantity</th>
                <th>price</th>
              </tr>
              <tr>
                <td>
                  <div className="flex">
                    <img
                      className="w-[200px] rounded-md"
                      src={Spiderman.src}
                    ></img>
                    <div className="grid">
                      <div className="text-white text-[25px] pt-[40px]">
                        {productTitle}
                      </div>
                      <div className="flex gap-2">
                        <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] bg-[#FFB636] text-black">
                          {product_platform[0]}
                        </button>
                        <button className=" font-semibold border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] bg-[#FFB636] text-black">
                          {condition[0]}
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select name="1" id="cars">
                    {Number_Of_products.map((Number_Of_products, index) => (
                      <option key={index}>{Number_Of_products}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <div className="text-white text-[20px]">
                    {price[0]} <span className="text-[15px]">Rs</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
