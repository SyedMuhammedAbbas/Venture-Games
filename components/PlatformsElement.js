import PS5 from '../images/PS5.png';
import PS4 from '../images/ps4-logo.png';
import xbox from '../images/xbox-logo.png';
import nintendo from '../images/nintendo.png'

export default function PlatformsElement() {
    return (
        <div className=" bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] p-36 px-64 5xl:p-32 5xl:px-auto 4xl:p-20 2xl:p-10 mobile:p-4">
            <div className="grid gap-10 justify-center border-[1px] border-white rounded-[40px] p-10 pt-0">
                <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] text-center text-white font-hemi">Shop By Platform</div>
                <div className="flex gap-10 xl:grid xl:grid-cols-2 mobile:grid-cols-1">
                    <div className="border-[1px] rounded-[40px] border-white px-10 py-[100px] xl:py-[70px] tablet1:px-auto tablet1:py-auto  mobile:py-[100px]"><img className="w-[250px] mt-12 tablet1:w-[200px]  tablet1:mt-10 tablet1:ml-5 tablet3:ml-auto mobile:justify-center tablet3:m-auto" src={PS5.src} /></div>
                    <div className="border-[1px] rounded-[40px] border-white px-12 py-[100px] xl:py-[70px] tablet1:px-auto tablet1:py-auto mobile:py-[65px]"><img className="w-56 xl:w-36 tablet1:w-[150px]  xl:ml-[45px] tablet1:ml-[30px] tablet3:ml-auto tablet1:mr-10 tablet3:mr-auto" src={xbox.src} /></div>
                    <div className="border-[1px] rounded-[40px] border-white px-10 py-[100px] xl:py-[70px] tablet1:px-auto tablet1:py-auto mobile:py-[100px]"><img className="w-[250px] mt-12 tablet1:w-[200px]  tablet1:mt-10 tablet1:ml-5 tablet3:ml-auto tablet3:m-auto" src={PS4.src} /></div>
                    <div className="border-[1px] rounded-[40px] border-white px-10 py-[100px] xl:py-[70px] tablet1:px-auto tablet1:py-auto mobile:py-[100px]"><img className="w-[250px] mt-12 tablet1:w-[200px]  tablet1:mt-10 tablet1:ml-5 tablet3:ml-auto tablet3:m-auto" src={nintendo.src} /></div>
                </div>
            </div>
        </div>

    )
}