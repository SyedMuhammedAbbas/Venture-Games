import Spiderman from '../images/image 4.png';

export default function SaleCard() {
    return (
        <div className='w-[370px] mobile1:w-auto'>
            <div className="h-[620px] p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile1:w-auto">

                <img className='rounded-3xl h-[400px] object-cover w-[350px] mobile1:w-auto' src={Spiderman.src} />
                <div className='flex mt-[-30px] ml-[10px]'>
                    <div className="flex gap-1">
                        <button className="text-black font-semibold h-4 bg-[#FFB636] px-3 rounded-md text-[12px]">PS4</button>
                        <button className="text-black font-semibold h-4 bg-[#FFB636] px-3 rounded-md text-[12px]">PS5</button>
                        <button className="text-black font-semibold h-4 bg-[#FFB636] px-3 rounded-md text-[12px]">XBOX</button>
                    </div>
                    <div className="grid gap-0 mt-[-45px] pl-[80px]">
                        <div className="text-red-600 text-right line-through text-[20px]">15,999</div>
                        <div className="text-white text-[27px]">11,999</div>
                    </div>
                </div>

                <div className="grid gap-2 pl-4 overflow-y-hidden">

                    <div className="text-white text-[23px] mt-5">Spiderman - Miles Morales</div>
                    <div className='text-white text-[14px]'>Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.</div>
                    <div className="flex  gap-2 mt-[7px]">
                        <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[14px] px-8 py-1 hover:bg-white hover:text-black hover:border-black">Buy Now</button>
                        <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[14px] px-4 py-1 hover:bg-white hover:text-black hover:border-black">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}