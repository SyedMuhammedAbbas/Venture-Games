import PS5 from "../../images/platforms/PS5.png";
import PS4 from "../../images/platforms/PS4.png";
import XBOX from "../../images/platforms/XBOX.png";
import NINTENDO from "../../images/platforms/NINTENDO.png";
import Link from "next/link";
import axios from "axios";
import { useSelect } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PlatformsElement({ consoles }) {
  const router = useRouter();
  const [platforms, setPlatforms] = useState();
  async function getPlatforms() {
    let response = await axios.get("https://api.venturegames.pk/GetPlatforms");
    setPlatforms(response.data);
  }

  async function handleClick(selectedPlatform) {
    console.log(selectedPlatform._id);
    router.push({
      pathname: "/platforms",
      query: { selectedPlatform: selectedPlatform._id },
    });
  }

  useEffect(() => {
    getPlatforms();
  }, []);
  // const platformLogos = [PS5, xbox, PS4, nintendo];
  const platformClass =
    "snap-center border-[1px] w-[340px] h-[450px] flex justify-center items-center rounded-[35px] hover:cursor-pointer  xl1:rounded-[30px] border-white mobile:rounded-[35px]";
  const platformImgClass = " w-[290px]  justify-center";
  console.log(platforms);
  return (
    <div className="platformElement bg-gradient-to-tr from-[#805712] via-black to-[#805712] p-20 5xl:px-20 px-64 5xl:px-auto 4xl:px-10 2xl:px-auto mobile:p-4 min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] flex justify-center mobile1:items-center">
      {platforms && (
        <div className="grid gap-10 justify-center w-[125vw] platformElementMainClass border-[1px] mobile1:h-auto  border-white rounded-[40px]  p-10 tablet2:p-5 pt-0 my-[30px]">
          <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] mobile:text-[25px] text-center text-white font-hemi">
            Shop By Platform
          </div>
          <div className="flex justify-center  2xl:justify-start gap-10 mobile:gap-5 w-[110vw] platformElementClass overflow-x-auto platform-items-scroll h-[500px] snap-x snap-mandatory">
            {platforms.map((platformLogos, index) => (
              <div key={index}>
                <a
                  onClick={() => {
                    handleClick(platformLogos);
                  }}
                >
                  <div className={platformClass}>
                    {platformLogos.Title === "PS4" ? (
                      <img className={platformImgClass} src={PS4.src} />
                    ) : platformLogos.Title === "PS5" ? (
                      <img className={platformImgClass} src={PS5.src} />
                    ) : platformLogos.Title === "XBOX" ? (
                      <img className={platformImgClass} src={XBOX.src} />
                    ) : (
                      <></>
                    )}

                    {/* {platformLogos.Title} */}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
