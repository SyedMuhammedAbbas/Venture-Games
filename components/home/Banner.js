import Controller from "../../images/controller.png";

export default function Banner() {
  const bannerDesp =
    "We at Venture Games make sure that we help you in unleashing the true gamer in you so that you top the league with your veteran moves.";
  const bannerClosing = " Venture Games, Play Beyond";
  return (
    <div className="grid justify-center items-center min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] gap-20  relative px-[5%] lg:px-auto border-b-blackOpac border-b-2 pt-20 bg-gradient-to-r from-[#000000] via-[#2d2d2d] to-[#000000] ">
      <div className="flex lg:grid lg:justify-center lg:gap-10">
        <div className="text-white w-[550px] absolute left-20 lg:w-auto  text-[100px] lg:relative lg:left-0 lg:justify-center mobile:text-[60px] mobilesm:text-auto font-hemi leading-[100px] mobile:leading-[113px] pl-20 lg:pl-0 bannerTextIos">
          Find your <span className="text-[#FFB636]">gaming</span> thirst.
          quenched
        </div>
        <div className="flex justify-center">
          <img
            className="w-[500px] lg:flex lg:justify-center lg:w-[350px] mobilesm:w-auto rounded-full absolute lg:relative right-[10%] items-center lg:right-0 lg:mb-0"
            src={Controller.src}
          />
        </div>
      </div>

      <div className="text-center text-white text-[40px] px-20 mobile:px-5 3xl:text-[2.5vw] mobile:text-[25px] mobile:m-3 mobile:text-center">
        {/* {bannerDesp} */}
        {/* {bannerClosing} */}
      </div>
    </div>
  );
}
