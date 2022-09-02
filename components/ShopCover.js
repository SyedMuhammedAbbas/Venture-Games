import ShopBack from '../images/shop-background.png';

export default function ShopCover(){
    return(
        <div className='grid bg-black h-[100vh] 5.1xl:pt-[7%] xl1:pt-[15%] tablet3:pt-[25%] mobile:pt-[35%] mobile2.1:pt-[45%] mobile1:pt-[65%] xl1:gap-[10%] tablet3:gap-[20%] mobile:gap-[50%]'>
            <img className='justify-center object-contain' src={ShopBack.src}></img>
            <div className='text-white text-[3vw] tablet3:text-[4.5vw] text-center mt-[-120px] lg:mb-[0px] font-hemi'>All Your Gamming Needs</div>
        </div>
    )
}