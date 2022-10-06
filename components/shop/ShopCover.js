import ShopBack from "../../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid w-full bg-black  min-h-[125vh] max-h-[100%]  items-center ">
      <div className="grid relative">
        <img
          className="flex justify-center object-contain shopcoverClass"
          src={ShopBack.src}
        ></img>
        <div className="text-white shopcoverClassHeading text-[3vw] tablet3:text-[5vw] text-center relative flex justify-center mobile:absolute mobile:bottom-20 mobile:left-[25%] bottom-10 font-hemi">
          All Your Gamming Needs
        </div>
      </div>
    </div>
  );
}
