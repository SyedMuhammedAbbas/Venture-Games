import Ceo from "../../images/logo.png";

export default function LearnMoreCeo({ heading, description, name }) {
  return (
    <>
      <div className="flex xl1:flex-col-reverse justify-center bg-gradient-to-b from-[#000000] via-[#2d2d2d] to-[#000000] min-h-[140vh] max-h-[100%] py-[20vh] p-20 tablet2.1:p-10 mobile:p-5 mobile1:p-0">
        <div className="grid w-[700px] xl1:w-[600px] tablet2.1:w-[500px] mobile:w-auto mobile:px-10 xl1:pb-[30px] xl1:ml-[40%] mobile:ml-0">
          <div className="font-hemi text-[60px] 3xl:text-[50px] tablet2.1:text-[40px] mobile2.1:text-[30px] text-white">
            {heading}
          </div>
          <div className="text-white text-[30px] 3xl:text-[27px] tablet2.1:text-[25px] mobile2.1:text-[20px]">
            {description}
          </div>
          <br />
          <div className="text-white text-[30px] 3xl:text-[27px] tablet2.1:text-[25px] mobile2.1:text-[20px] text-right">
            `{name}
          </div>
        </div>

        <div className="p-20 ml-10 mobile:ml-0 mobile:justify-center xl1:flex xl1:justify-start">
          <img className="w-[300px]" src={Ceo.src}></img>
        </div>
      </div>
    </>
  );
}
