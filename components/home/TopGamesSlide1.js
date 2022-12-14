import Link from "next/link";

export default function TopGamesSlide({ carouselProd }) {
  return (
    <>
      <div className="flex justify-center snap-center topgamesCarousel min-h-[120vh] max-h-[100%] pt-[10rem] mobile:pt-[4em]  pb-[8rem] tablet2:pb-auto gap-10  tablet2:gap-1  tablet2:grid   tablet2:justify-center">
        <div className="flex justify-center">
          <img
            className="w-[500px] h-[500px] rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet1:w-[330px] tablet1:h-[330px]  tablet2:w-[450px] tablet2:h-[450px]  mobile:w-[80vw] mobile:h-[80vw]   mobile1:w-[370px] mobile1:h-[370px] mobilesm:w-[250px] mobilesm:h-[250px]"
            src={carouselProd.Image}
          ></img>
        </div>
        <div className="block mt-16 tablet1:mt-10 mobile:text-left mobile:mx-10 tablet2:mt-10 tablet2:mx-[10px] w-[500px] tablet2:w-[450px] mobile:w-auto">
          <div className="text-[50px] text-[#fff]  font-sfpro font-[800] tracking-wide leading-[55px] pb-4 xl:text-[45px] xl:leading-[50px] tablet1:text-[35px] tablet1:leading-[40px] mobile:leading-[45px] ">
            {carouselProd.Title}
          </div>
          <div className="text-[25px] h-[150px] overflow-y-auto productTitle tracking-wide text-white xl:text-[20px] font-[600] pb-4 ">
            {carouselProd.Description}{" "}
          </div>
          <Link href={`/product/${carouselProd.ProductLink}`}>
            <button className="border-[2px] border-white text-white border-slate-900 tracking-wide rounded px-2 py-2 mt-5 text-[18px] mobile:text-[15px] font-bold">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
