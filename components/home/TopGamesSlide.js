import Link from "next/link";

export default function TopGamesSlide({
  LaptopcarouselProd,
  MobilecarouselProd,
}) {
  return (
    <div className="flex relative items-center">
      {screen.width < 960 ? (
        <img
          className="bg-center h-[100%] w-[100%] bg-cover"
          src={MobilecarouselProd}
        ></img>
      ) : (
        <img
          className="bg-center h-[100%] w-[100%] bg-cover"
          src={LaptopcarouselProd}
        ></img>
      )}
    </div>
  );
}
