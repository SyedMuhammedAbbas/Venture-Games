import PS5 from "../images/PS5.png";
import PS4 from "../images/ps4-logo.png";
import xbox from "../images/xbox-logo.png";
import nintendo from "../images/nintendo.png";
import Link from "next/link";

export default function PlatformsElement() {
  const platformLogos = [PS5, PS4, xbox, nintendo];
  const platformClass =
    "border-[1px] h-[300px] tablet:h-[250px] mobile:h-[150px] mobile1:h-[100px] rounded-[40px] border-white mobile:rounded-[25px]";
  const platformImgClass =
    "w-[250px] justify-center py-[120px] px-[20px] mobile:py-[40px] mobile1.1:px-[15px]";
  return (
    <div className=" bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] p-36 snap-center px-64 5xl:p-32 5xl:px-auto 4xl:p-20 2xl:p-10 mobile:p-4 ">
      <div className="grid gap-10 justify-center border-[1px]  border-white rounded-[40px]  p-10 tablet2:p-5 pt-0 my-[30px]">
        <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] text-center text-white font-hemi">
          Shop By Platform
        </div>
        <div className="flex gap-10 mobile:gap-5 xl:grid xl:grid-cols-2 mobile:grid-cols-2">
          {platformLogos.map((platformLogos, i) => (
            <Link href={`/${platformLogos}`}>
              <a>
                <div key={i} className={platformClass}>
                  <img className={platformImgClass} src={platformLogos.src} />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
