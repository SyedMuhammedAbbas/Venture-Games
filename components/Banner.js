import Controller from "../images/controller.png"

export default function Banner() {
    return (
        <div className="grid gap-20 pb-20 pl-64 mobile:pl-0 4xl:pl-[5vw] pt-20 bg-gradient-to-r from-[#000000] via-[#2d2d2d] to-[#000000] ">
            <div className="flex mobile:grid mobile:justify-center mobile:gap-10 mobile:pl-[20px] ">
                <div className="text-white text-[100px] 4xl:text-[7vw] mobile:text-[80px] mobilesm:text-auto font-hemi leading-[90px] 4xl:leading-[6vw] mobile:leading-[65px] mobilesm:leading-auto">Eat. <br />Sleep. <br /><span className="text-[#FFB636]">Game</span> <br /> Repeat.</div>
                <img className="w-[500px] 3xl:w-[35vw] lg:w-[40vw] mobile:w-[400px] mobilesm:w-auto rounded-full absolute mobile:relative right-10 mobile:pl-[30px] lg:right-[0px] pr-28" src={Controller.src} />
            </div>

            <div className="text-white text-[40px] 3xl:text-[2.5vw] mobile:text-[30px] mobile:text-center">
                We At Venture Games bahkdba hahda dhagjdhadhh dadhmahj dahdka bhda dgaj 
                ajdha fhaku We At Venture Games bahkdba hahda dhagjdhadhh bhda dgaj 
                dada dahb gosj We At Venture Games bahkdba hahda dhagjdhadhh bhda dgaj
            </div>
        </div>
    )
}