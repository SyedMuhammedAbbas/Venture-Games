import ShopBack from "../../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid w-full bg-black  min-h-[140vh] mobile:min-h-[125vh] max-h-[100%]  items-center ">
      <div className="grid relative mt-[-180px]">
        <img
          className="flex justify-center object-contain shopcoverClass"
          src={ShopBack.src}
        ></img>
        <div className="text-white shopcoverClassHeading text-[3vw] tablet3:text-[5vw] text-center relative flex justify-center bottom-10 mobile:bottom-0 font-hemi">
          All Your Gaming Needs
        </div>
      </div>
    </div>
  );
}
