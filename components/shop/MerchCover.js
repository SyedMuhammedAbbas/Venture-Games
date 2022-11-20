import ShopBack from "../../images/shop-background.png";

export default function MerchCover() {
  return (
    <div className="grid w-full bg-black min-h-[140vh] max-h-[100%] items-center ">
      <div className="grid relative mobile:gap-[50%]">
        <div className="flex items-center justify-center bg-[url('../images/background.png')] bg-[length:900px_1000px]  pb-20 h-[140vh] 4xl:bg-[length:950px_1050px] tablet2:bg-[length:850px_950px] lg:bg-[length:750px_850px] tablet1:bg-[length:600px_700px] mobile:tablet1:bg-[length:700px_800px] bg-no-repeat bg-[left_25%_top_0rem] 4xl:bg-[left_20%_top_0rem] xl:bg-[left_25%_top_0rem] tablet1:bg-[left_25%_top_0px] tablet2:bg-[left_25%_top_0px] mobile:bg-[left_25%_top_0px]">
          <div className="flex justify-center object-contain shopcoverClass uppercase text-[#a0814c] text-[200px] xl3:text-[120px] tablet2.1:text-[20vw]">
            Coming soon
          </div>
        </div>
      </div>
    </div>
  );
}
