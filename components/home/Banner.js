import Controller from "../../images/controller.png";

export default function Banner() {
  const bannerDesp =
    "We at Venture Games make sure that we help you in unleashing the true gamer in you so that you top the league with your veteran moves.";
  const bannerClosing = " Venture Games, Play Beyond";
  return (
    <div className="grid gap-20 pb-20  mobile:pl-0 4xl:pl-[5vw] pt-20 bg-gradient-to-r from-[#000000] via-[#2d2d2d] to-[#000000] ">
      <div className="flex mobile:grid mobile:justify-center w-[100vw] [3000px]:w-[100%] mobile:gap-10 mobile:pl-[20px] ">
        <div className="text-white pl-32 mobile:pl-5 text-[100px] 4xl:text-[7vw] mobile:text-[80px] mobilesm:text-auto font-hemi leading-[90px] 4xl:leading-[6vw] mobile:leading-[80px] ">
          Eat. <br />
          Sleep. <br />
          <span className="text-[#FFB636]">Game</span> <br /> Repeat.
        </div>
        <img
          className="w-[500px] 3xl:w-[35vw] lg:w-[40vw] mobile:w-[400px] mobilesm:w-auto rounded-full absolute mobile:relative right-10 mobile:pl-[30px] lg:right-[0px] pr-28"
          src={Controller.src}
        />
      </div>

      <div className="flex justify-center text-center text-white text-[40px] px-20 mobile:px-5 3xl:text-[2.5vw] mobile:text-[25px] mobile:m-3 mobile:text-center">
        {bannerDesp}
        {bannerClosing}
      </div>
    </div>
  );
}
