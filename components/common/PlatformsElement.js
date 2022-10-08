import PS5 from "../../images/PS5.png";
import PS4 from "../../images/ps4-logo.png";
import xbox from "../../images/xbox-logo.png";
import nintendo from "../../images/nintendo.png";
import Link from "next/link";

export default function PlatformsElement({ consoles }) {
  const platformLogos = [PS5, xbox, PS4, nintendo];
  const platformClass =
    "snap-center border-[1px] w-[340px] h-[450px] flex justify-center items-center rounded-[35px]  xl1:rounded-[30px] border-white mobile:rounded-[35px]";
  const platformImgClass = " w-[290px]  justify-center";
  return (
    <div className="platformElement bg-gradient-to-tr from-[#805712] via-black to-[#805712] p-20 5xl:px-20 px-64 5xl:px-auto 4xl:px-10 2xl:px-auto mobile:p-4 min-h-[140vh] max-h-[100%] flex justify-center mobile1:items-center">
      <div className="grid gap-10 justify-center w-[125vw] platformElementMainClass border-[1px] mobile1:h-auto  border-white rounded-[40px]  p-10 tablet2:p-5 pt-0 my-[30px]">
        <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] mobile:text-[25px] text-center text-white font-hemi">
          Shop By Platform
        </div>
        <div className="flex justify-center 2xl:justify-start gap-10 mobile:gap-5 w-[110vw] platformElementClass overflow-x-auto platform-items-scroll h-[500px] snap-x snap-mandatory">
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
