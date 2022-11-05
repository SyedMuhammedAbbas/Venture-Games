import Link from "next/link";

export default function TopGamesSlide({ carouselProd }) {
  return (
    <div className="flex relative">
      <img
        className="xxl:min-w-[2300px] xxl:max-w-[100%] xxl:bg-contain tablet:min-w-[960px] tablet:max-w-full tablet:bg-cover xxl:min-h-[100vh] xxl:max-h-[100%] "
        src={carouselProd}
      ></img>
    </div>
  );
}
