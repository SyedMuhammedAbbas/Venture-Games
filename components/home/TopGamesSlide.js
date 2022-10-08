export default function TopGamesSlide({ carouselProd }) {
  return (
    <>
      <div className="flex m-auto snap-center topgamesCarousel min-h-[140vh] max-h-[100%] pt-[10rem] mobile:pt-[4em]  pb-[8rem] tablet2:pb-auto gap-10  tablet2:gap-1 w-[1000px] tablet2:w-[500px] mobile:w-[500px] xl:w-[900px] lg:w-[800px] tablet1:w-[750px] tablet2:grid  mobile1:w-[390px] tablet2:justify-center mobilesm:w-[270px]">
        <img
          className="w-[500px] h-[500px] rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet1:w-[330px] tablet1:h-[330px]  tablet2:w-[450px] tablet2:h-[450px] tablet2:justify-center mobile:w-[80vw] mobile:h-[80vw] mobile:ml-auto mobile2:mr-[35px] mobile1:w-[400px] mobile1:h-[400px] mobilesm:w-[250px] mobilesm:h-[250px] mobile1:ml-auto"
          src={carouselProd.product_image}
        ></img>
        <div className="block mt-16 tablet1:mt-10 tablet2:w-[400px] mobile:w-auto mobile1:w-auto tablet2:mx-[10px]">
          <div className="text-[50px] text-black font-sfpro font-[800] tracking-wide leading-[55px] pb-4 xl:text-[45px] xl:leading-[50px] tablet1:text-[35px] tablet1:leading-[40px] mobile:leading-[45px] ">
            {carouselProd.product_heading}
          </div>
          <div className="text-[25px] tracking-wide text-black xl:text-[20px] font-[600] pb-4 ">
            {carouselProd.product_subheading}{" "}
          </div>
          <button className="border-[2px] border-black text-black border-slate-900 rounded px-2 py-2 text-[14px] font-bold">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}