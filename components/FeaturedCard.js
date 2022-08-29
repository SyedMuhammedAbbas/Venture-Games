import Spiderman from '../images/image 4.png';

export default function FeaturedCard() {
    return (
        <div className="h-[470px] p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[320px]">
            {/* <div className="bg-[url('../images/image 4.png')] bg-[length:400px_400px] bg-no-repeat"> */}
            <img className='rounded-md h-[310px] object-cover w-[310px]' src={Spiderman.src} />
            <div className="flex gap-1 mt-[-30px] ml-[10px]">
                <button className="text-black font-semibold bg-[#FFB636] px-3 rounded-md text-[12px]">PS4</button>
                <button className="text-black font-semibold bg-[#FFB636] px-3 rounded-md text-[12px]">PS5</button>
                <button className="text-black font-semibold bg-[#FFB636] px-3 rounded-md text-[12px]">XBOX</button>
            </div>

            {/* </div> */}
            <div className="grid justify-center gap-3">
                <div className="text-white text-[23px] mt-5">Spiderman - Miles Morales</div>
                <div className="flex gap-5 justify-center">
                    <div className="text-red-600 line-through text-[25px]">15,999</div>
                    <div className="text-white text-[25px]">11,999 PKR</div>
                </div>
                <div className="flex justify-center gap-2 mt-[-7px]">
                    <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-8 py-1 hover:bg-white hover:text-black hover:border-black">View</button>
                    <button className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-4 py-1 hover:bg-white hover:text-black hover:border-black">Add to cart</button>
                </div>
            </div>
        </div>
    )
}