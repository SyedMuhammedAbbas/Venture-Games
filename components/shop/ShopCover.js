import ShopBack from "../../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid w-full bg-black  min-h-[140vh] mobile:min-h-screen max-h-[100%]  items-center ">
      <div className="grid relative mobile:gap-[50%] ">
        <img
          className="flex justify-center object-contain shopcoverClass"
          src={ShopBack.src}
        ></img>
        <div className="text-white  shopcoverClassHeading text-[3vw] tablet3:text-[5vw] text-center relative flex justify-center bottom-10 font-hemi">
          All Your Gaming Needs
        </div>
      </div>
    </div>
  );
}
