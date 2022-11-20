import ShopBack from "../../images/shop-background.png";

export default function ShopCover() {
  return (
    <div className="grid relative w-full bg-black  min-h-[120vh] mobile:min-h-screen max-h-[100%]  items-center ">
      <div className="grid gap-20 relative">
        <div>
          <img
            className="flex justify-center object-contain shopcoverClass"
            src={ShopBack.src}
          ></img>
        </div>
        <div className="text-white  shopcoverClassHeading text-[3vw] tablet3:text-[5vw] text-center relative bottom-20 mobile:bottom-5  flex justify-center font-hemi">
          All Your Gaming Needs
        </div>
      </div>
    </div>
  );
}
