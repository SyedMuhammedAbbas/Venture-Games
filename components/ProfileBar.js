import {AiOutlineSearch} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {BsSliders} from 'react-icons/bs'
import {BsSortDown} from 'react-icons/bs'

export default function ProfileBar({filter,sethandle,handle}){

    const icons = "text-[30px] 2xl:text-[25px] lg:text-[21px] text-white"

    const onButtonClick=()=>{
        {handle == true ? sethandle(false) : sethandle(true)}
    }
    return(
        <div className="flex gap-9 2xl:gap-7 mobile:gap-5 fixed w-[100%] justify-end pr-24 2xl:pr-20 lg:pr-14 mobile:pr-7 mt-[140px] 2xl:mt-[127px] lg:mt-[91px] tablet:hidden p-3 rounded-br-2xl bg-black bg-opacity-30 backdrop-blur-xl z-[999]">  
            {filter == 'true' && 
                <div className='flex gap-9 absolute left-20'>
                    <div className='flex gap-4 hover:cursor-pointer' onClick={()=>onButtonClick()}>
                        <div className={icons}><BsSliders/></div>
                        <div className='text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]'>Filter</div>
                    </div>

                    <div className='flex gap-4'>
                        <div className={icons}><BsSortDown/></div>
                        <div className='text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]'>Sort</div>
                    </div>
                </div>
            }
            
            <div className="text-[35px] 2xl:text-[27px] lg:text-[24px] text-white"><AiOutlineSearch/></div>
            <div className={icons}><BsHandbag/></div>
            
            <div className="flex">
                <div className="text-[30px] 2xl:text-[25px] lg:text-[21px] text-white mt-[-7px] lg:mt-[-5px]">Sufyan</div> 
                <div className="text-[34px] 2xl:text-[25px] lg:text-[21px] text-white mt-[2px] lg:mt-[3px]"><MdKeyboardArrowDown/></div>
            </div>
        </div>
    )
}