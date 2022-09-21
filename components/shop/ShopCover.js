import ShopBack from "../../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid w-full bg-black h-[100%] mobile:h-[125vh]  items-center ">
      <div className="grid">
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
