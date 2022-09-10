import ShopBack from "../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid bg-black h-[100%] xl1:pt-[0%] tablet3:pt-[10%] mobile:pt-[20%] mobile2.1:pt-[20%] mobile1:pt-[20%] ">
      <img
        className="flex justify-center object-contain"
        src={ShopBack.src}
      ></img>
      <div className="text-white text-[3vw] tablet3:text-[5vw] text-center relative bottom-[40px] font-hemi">
        All Your Gamming Needs
      </div>
    </div>
  );
}
