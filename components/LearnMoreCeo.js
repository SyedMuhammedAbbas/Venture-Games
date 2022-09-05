import Ceo from "../images/ceo.png"

export default function LearnMoreCeo(){
    return(
        <>
            <div className="flex gap-20 justify-center bg-gradient-to-b from-[#000000] via-[#2d2d2d] to-[#000000] px-[10vw] p-20">
                <div className="grid w-[700px]">
                    <div className="font-hemi text-[60px] text-white">Message From The CEO</div>
                    <div className="text-white text-[30px]">we at venture games cjnbcdojb sjvsbvoisvofv sjnvso vsfo nvsfn oisnv ois v shdods vds  sanv isn v  sivd ndsap nv d ndsap nv  we at venture games cjnbcdojb sjvsbv oisvofv sjnvso vsfo nv sfn oisnv ois v shdods vds  sanvisn v  sivd ndsap nv d ndsap we at venture games cjnbcdojb sjvs</div>
                    <div className="text-white text-[30px] text-right">`Mr John</div>
                </div>

                <div className="p-20 ml-10"><img className="w-[300px] rounded-full" src={Ceo.src}></img></div>
            </div>
        </>
    )
}