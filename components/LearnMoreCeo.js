import Ceo from "../images/ceo.png";

export default function LearnMoreCeo() {
  return (
    <>
      <div className="flex xl1:flex-col-reverse justify-center bg-gradient-to-b from-[#000000] via-[#2d2d2d] to-[#000000] py-[20vh] p-20 tablet2.1:p-10 mobile:p-5 mobile1:p-0">
        <div className="grid w-[700px] xl1:w-[600px] tablet2.1:w-[500px] mobile:w-auto mobile:px-10 xl1:pb-[30px]">
          <div className="font-hemi text-[60px] 3xl:text-[50px] tablet2.1:text-[40px] mobile2.1:text-[30px] text-white">
            Message From The CEO
          </div>
          <div className="text-white text-[30px] 3xl:text-[27px] tablet2.1:text-[25px] mobile2.1:text-[20px]">
            we at venture games cjnbcdojb sjvsbvoisvofv sjnvso vsfo nvsfn oisnv
            ois v shdods vds sanv isn v sivd ndsap nv d ndsap nv we at venture
            games cjnbcdojb sjvsbv oisvofv sjnvso vsfo nv sfn oisnv ois v shdods
            vds sanvisn v sivd ndsap nv d ndsap we at venture games cjnbcdojb
            sjvs
          </div>
          <br />
          <div className="text-white text-[30px] 3xl:text-[27px] tablet2.1:text-[25px] mobile2.1:text-[20px] text-right">
            `Mr John
          </div>
        </div>

        <div className="p-20 ml-10 mobile:ml-0 mobile:justify-center xl1:flex xl1:justify-end">
          <img className="w-[300px] rounded-full" src={Ceo.src}></img>
        </div>
      </div>
    </>
  );
}
