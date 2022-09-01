import ShopBack from '../images/shop-background.png';

export default function ShopCover(){
    return(
        <div className='bg-black h-[90vh]'>
            <img className='justify-center' src={ShopBack.src}></img>
            <div className='text-white text-[3vw] text-center mt-[-120px] font-hemi'>All Your Gamming Needs</div>
        </div>
    )
}