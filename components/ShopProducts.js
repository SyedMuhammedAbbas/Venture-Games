import { useState } from 'react';
import { BsSliders } from 'react-icons/bs'
import FeaturedCard from './FeaturedCard';
// import SaleCard from './SaleCard'


export default function ShopProducts({handle}) {

    const n = 12;
    const icons = "text-[35px] 2xl:text-[25px] lg:text-[21px] text-white"
    const buttons = "text-white border-[1px] font-semibold border-white rounded-lg text-[25px] px-2 w-40 py-1 hover:bg-white hover:text-black hover:border-black focus:bg-white focus:text-black focus:border-black"
    
    return (
        <div className='bg-[#FFB636] '>
            <div className="bg-[url('../images/background.png')] bg-[length:1700px_1800px] bg-no-repeat bg-[left_15vw_top_5rem]">
                <div className='flex pt-[10%]'>
                    {handle == true &&
                        <div className='bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] w-[500px] mt-[10%] h-[1300px] rounded-tr-[60px] rounded-br-[60px] transition ease-in-out delay-75'>
                            <div className='flex gap-4 justify-center my-7'>
                                <div className={icons}><BsSliders /></div>
                                <div className='text-[35px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]'>Filter</div>
                            </div>

                            <div className='grid ml-[50px] gap-4 border-y-[3px] border-white py-10 mr-14'>
                                <button className={buttons}>PS4</button>
                                <button className={buttons}>PS5</button>
                                <button className={buttons}>XBOX</button>
                                <button className={buttons}>Nintendo</button>
                            </div>

                            <div className='grid ml-[50px] gap-4 border-b-[3px] border-white py-10 mr-14'>
                                <button className={buttons}>Action</button>
                                <button className={buttons}>Adventure</button>
                                <button className={buttons}>Triller</button>
                                <button className={buttons}>Driving</button>
                            </div>

                            <div className='grid ml-[50px] gap-4 border-b-[3px] border-white py-10 mr-14'>
                                <button className={buttons}>Online</button>
                                <button className={buttons}>Offline</button>
                            </div>
                        </div>
                    }
                    <div className='grid grid-cols-4 gap-10 text-center mx-auto mt-[15%] mb-[5%]'>
                        {[...Array(n)].map((user) =>
                            <div key={user} className=''><FeaturedCard /></div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}