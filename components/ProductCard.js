import Spiderman from '../images/image 4.png'
import Teen from '../images/teenesbr.png'

export default function ProductCard() {
    return (
        <div className='bg-[#FFB636] pt-[15%] pb-[5%] lg:pt-[80px] tablet:pt-[50px]'>
            <div className='flex justify-center'>
                <img className='w-[550px] h-[550px] z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet1:w-[330px] tablet1:h-[330px]  tablet2:w-[450px] tablet2:h-[450px] tablet2:justify-center mobile:w-[80vw] mobile:h-[80vw] mobile:ml-auto mobile2:mr-[35px] mobile1:w-[330px] mobile1:h-[330px] mobilesm:w-[250px] mobilesm:h-[250px] mobile1:ml-auto' src={Spiderman.src}></img>
                <div className='grid gap-4 h-[500px] ml-[-20px] mt-[1.5%] bg-gradient-to-b from-[#000000] via-[#2d2d2d] to-[#000000] pl-[40px] w-[800px] rounded-tr-[45px] rounded-br-[45px]'>
                    <div className='pl-[80%] pt-[20px] mb-[-25px]'>
                        <label for="toggle" class="inline-flex relative items-center mb-5 cursor-pointer">
                            <input type="checkbox" value="used" className="sr-only peer text-[#FFB636]" />
                            <div className="w-32 h-10 bg-[#FFB636] rounded-full dark:bg-[#FFB636]  before:text-black before:pl-20  text-[#FFB636] after:absolute before:top-0.5 after:top-0.5 after:left-[2px] after:bg-black after:border-black after:border after:rounded-full after:h-9 after:w-16 after:transition-all dark:border-[#FFB636] "></div>
                            {/* <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span> */}
                        </label>
                    </div>
                    <div className='text-white text-[35px] font-semibold'>Spiderman - Miles Morales</div>
                    <div className='flex gap-1'>
                        <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black">PS4</button>
                        <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black">PS5</button>
                        <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-5 rounded-md text-[12px] hover:bg-[#FFB636] hover:text-black">XBOX</button>
                    </div>
                    <div className='grid'>
                        <div className='flex'>
                            <div className='text-gray-400 text-[25px]'>Action <span className=''>. </span></div>
                            <div className='text-gray-400 text-[25px]'>Thriller <span className='' >. </span></div>
                            <div className='text-gray-400 text-[25px]'>Story</div>
                        </div>
                        <div className='text-gray-400 text-[25px]'>Single Player <span className='' >.</span> 2020</div>
                    </div>
                    <div className='text-white'>Experience The Rise Of Miles Morales As The New Hero <br /> Masters Incredible, Explosive New Powers To Become <br />His Own Spider-Man.</div>
                    <div className='flex gap-5 border-y-2 border-gray-600 w-[250px] pt-1'>
                        <div className='text-red-600 line-through text-[23px]'>15,999</div>
                        <div className='border-r-2 border-gray-600 h-5 mt-3'></div>
                        <div className='text-white text-[25px]'>11,999 PKR</div>
                    </div>

                    <div>
                        <div className='flex gap-2'>
                            <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black cursor-pointer">Buy Now</button>
                            <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black ">Add to Cart</button>
                        </div>

                        <div className='relative pl-[85%] mt-[-90px] bottom-[40px]'><img className='w-[70px]' src={Teen.src}></img></div>
                    </div>
                </div>

            </div>
        </div>
    )
}