import ShopBack from "../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid bg-black h-[100%] tablet:h-[100vh] 5.1xl:pt-[7%] xl1:pt-[15%] tablet3:pt-[25%] mobile:pt-[35%] mobile2.1:pt-[45%] mobile1:pt-[65%] ">
      <img className="justify-center object-contain" src={ShopBack.src}></img>
      <div className="text-white text-[3vw] tablet3:text-[5vw] text-center relative bottom-8 font-hemi">
        All Your Gamming Needs
      </div>
    </div>
  );
}
