import Link from "next/link";

export default function TopGamesSlide({ carouselProd }) {
  return (
    <div className="flex relative items-center">
      <img
        className="bg-center h-[100%] w-[100%] bg-cover"
        src={carouselProd}
      ></img>
    </div>
  );
}
