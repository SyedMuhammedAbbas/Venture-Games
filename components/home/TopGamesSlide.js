import Link from "next/link";

export default function TopGamesSlide({ carouselProd }) {
  return (
    <div className="flex relative">
      <img
        className="xxl:min-w-[2300px] xxl:max-w-[100%] xxl:bg-contain tablet:min-w-[960px] tablet:max-w-full tablet:bg-cover xxl:min-h-[100vh] xxl:max-h-[100%] "
        src={carouselProd}
      ></img>
      <div className="absolute justify-center text-center w-[600px] z-10 right-20 top-40">
        <div className="text-[50px] text-[#fff]  font-sfpro font-[800] tracking-wide leading-[55px] pb-4 xl:text-[45px] xl:leading-[50px] tablet1:text-[35px] tablet1:leading-[40px] mobile:leading-[45px] ">
          Get your hands on FIFA 23 limited edition Right now !!!
        </div>
        <div className="text-[25px] h-[150px] overflow-y-auto productTitle tracking-wide text-white xl:text-[20px] font-[600] pb-4 ">
          A marketplace that has populer artists from all around the world
        </div>
        <Link href={`/product/${carouselProd.ProductLink}`}>
          <button className="border-[2px] border-white text-white border-slate-900 tracking-wide rounded px-2 py-2 mt-5 text-[18px] mobile:text-[15px] font-bold">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
