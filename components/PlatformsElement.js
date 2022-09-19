import PS5 from "../images/PS5.png";
import PS4 from "../images/ps4-logo.png";
import xbox from "../images/xbox-logo.png";
import nintendo from "../images/nintendo.png";
import Link from "next/link";

export default function PlatformsElement({ consoles }) {
  const platformLogos = [PS5, xbox, PS4, nintendo];
  const platformClass =
    "border-[1px] w-[260px] h-[350px] flex justify-center mobile1:h-[270px] mobile1.1:h-[250px] mobilesm:h-[auto] mobile1:w-auto  rounded-[30px] border-white mobile:rounded-[35px]";
  const platformImgClass =
    "w-[250px] justify-center px-5 py-[143px] mobile1:py-[100px] mobile1.1:py-[110] px-[20px] mobile1.1:px-[20px]";
  return (
    <div
      className={`bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33]  ${
        consoles === true
          ? "pt-[200px] pb-auto h-[125vh] px-36 5xl:px-32 4xl:px-20 2xl:px-auto mobile:px-4 tablet:pt-[90px] tablet:h-[100%] flex justify-center mobile1:flex mobile1:items-center"
          : "p-36 5xl:px-32 4xl:px-20 2xl:px-auto mobile:p-4 h-[100%] mobile1:h-[125vh] flex justify-center mobile1:items-center"
      }  px-64 5xl:px-auto `}
    >
      <div className="grid gap-10 justify-center border-[1px] mobile1:h-auto  border-white rounded-[40px]  p-10 tablet2:p-5 pt-0 my-[30px]">
        <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] text-center text-white font-hemi">
          Shop By Platform
        </div>
        <div className="flex gap-5 mobile:gap-5 xl:grid xl:grid-cols-4 tablet:grid-cols-2">
          {platformLogos.map((platformLogos, index) => (
            <div key={index}>
              <Link href={`/${platformLogos}`}>
                <a>
                  <div className={platformClass}>
                    <img className={platformImgClass} src={platformLogos.src} />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
