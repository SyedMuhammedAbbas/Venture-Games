import PS5Controller from "../../images/ps5Controller.png";

export default function LearnMoreClientsSay() {
  const description =
    "Venture Games is one of the earliest pioneers in the online gaming space. We provide authentic new & used consoles,accessories,cards & demanded game Cd’s to quench your thirst for gaming and satisfy the player in you. We make sure to provide notch services with local and international warranty for the items we sell. Don't wait further, order now to be a veteran player in your league.";
  return (
    <>
      <div className="flex bg-[#FFB636] h-auto justify-center items-center min-h-[140vh] max-h-[100%] p-10 pt-[10vh] pb-[10vh] lg:grid lg:pt-[5vh]">
        <div className="bg-[url('../images/background.png')] bg-[length:500px_600px] 2xl:bg-[length:400px_500px] lg:bg-[length:300px_400px] lg:pb-[5vh] bg-no-repeat bg-[left_0vw_top_0rem]">
          <div className="w-[600px] h-[500px] 2xl:w-[500px] 2xl:h-[400px] lg:w-[400px] lg:h-[300px] mobile1:w-[350px] pt-[120px] pl-[130px] 2xl:pl-[100px] lg:pl-[70px] mobile1:pl-[30px]">
            <img
              className="w-[450px] 2xl:w-[350px] lg:w-[250px] text-center"
              src={PS5Controller.src}
            ></img>
          </div>
        </div>

        <div className="grid mt-[10vh] xl2:mt-[0vh] lg:ml-[20vw] mobile:ml-[20vw] mobile1:ml-0">
          <p className=" text-[35px] 3xl:text-[30px] lg:text-[25px] mobile:text-[20px] text-black">
            <h1 className="font-hemi text-[90px] 3xl:text-[70px] lg:text-[60px] mobile:text-[45px]">
              What We Do?
            </h1>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
