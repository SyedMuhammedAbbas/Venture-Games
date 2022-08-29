import SaleCard from "./SaleCard";
import { MdKeyboardArrowRight } from 'react-icons/md';
import {MdKeyboardArrowLeft} from 'react-icons/md'
import React, { useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';

export default function Sale() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (

        <div className='grid bg-[#FFB636] p-[5vw] 3xl:px-[3vw] 2xl:px-[2vw] pt-[80px] mobile:px-0'>
            <div className="border-[5px] border-black rounded-[35px] pb-3 w-auto">
                <div className='flex'>
                    <div className='font-hemi text-black text-[80px] xl:text-[7vw] bg-[#FFB636] mt-[-60px] lg:mt-[-50px] mobile:mt-[-30px] mobile1:mt-[-20px] mobilesm:mt-[10px] ml-[7vw] px-[30px] '>Flash Sale</div>
                    <div className='absolute right-[9%] tablet2:right-[7%] mt-4'><button className='flex text-black text-[30px] tablet2:text-[20px]'>View all<div className='mt-0 text-[50px] tablet2:text-[35px]'><MdKeyboardArrowRight /></div></button></div>
                </div>
                <div className="mt-10 xl:mt-20 tablet1:hidden">
                    <ReactSimplyCarousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={3}
                        itemsToScroll={1}

                        dotsNav={{
                            show: true,
                            itemBtnProps: {
                              style: {
                                height: 12,
                                width: 12,
                                borderRadius: "50%",
                                border: 0,
                                marginLeft:"10px",
                                marginRight:"10px",
                                marginTop: "50px",
                                marginBottom: "40px",
                                background: "black",
                                transition: "all 0.3s"
                              }
                            },
                            activeItemBtnProps: {
                              style: {
                                height: 12,
                                width: 35,
                                borderRadius: "20px",
                                border: 0,
                                marginTop: "50px",
                                marginBottom: "40px",
                                background: "black",
                                transition: "all 0.3s"
                              }
                            }
                          }}

                        forwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                background: 'transparent',
                                border: 'none',
                                color: 'Black',
                                cursor: 'pointer',
                                fontSize: '70px',
                                lineHeight: 1,
                                textAlign: 'center',
                            },
                            children: <div><MdKeyboardArrowRight/></div>
                        }}

                        backwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                background: '#FFB636',
                                border: 'none',
                                color: 'Black',
                                cursor: 'pointer',
                                fontSize: '70px',
                                lineHeight: 1,
                                textAlign: 'center',
                            },
                            children: <div><MdKeyboardArrowLeft/></div>
                        }}

                        responsiveProps={[
                            {
                                itemsToShow: 4,
                                itemsToScroll: 1,
                                maxWidth:2000,
                                minWidth: 1700,
                                
                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                maxWidth:1700,
                                minWidth: 1320,
                                
                            },
                            {
                                itemsToShow: 2,
                                itemsToScroll: 1,
                                maxWidth:1320,
                                minWidth: 900,
                            },
                            {
                                itemsToShow: 1,
                                itemsToScroll: 1,
                                maxWidth:900,
                                minWidth: 300,
                            },
                            

                        ]}
                        
                        speed={400}
                        easing="linear"
                    >
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>

                    </ReactSimplyCarousel>

                </div>

                <div className="hidden tablet2:mt-10 tablet1:mt-20 tablet1:flex ">
                    <ReactSimplyCarousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={1}
                        itemsToScroll={1}

                        dotsNav={{
                            show: true,
                            itemBtnProps: {
                              style: {
                                height: 12,
                                width: 12,
                                borderRadius: "50%",
                                border: 0,
                                marginLeft:"10px",
                                marginRight:"10px",
                                marginTop: "50px",
                                marginBottom: "40px",
                                background: "black",
                                transition: "all 0.3s"
                              }
                            },
                            activeItemBtnProps: {
                              style: {
                                height: 12,
                                width: 35,
                                borderRadius: "20px",
                                border: 0,
                                marginTop: "50px",
                                marginBottom: "40px",
                                background: "black",
                                transition: "all 0.3s"
                              }
                            }
                          }}

                        responsiveProps={[
                            
                            {
                                itemsToShow: 1,
                                itemsToScroll: 1,
                                maxWidth:900,
                                minWidth: 300,
                            },
                            

                        ]}
                        
                        speed={400}
                        easing="linear"
                    >
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>
                        <div><SaleCard /></div>

                    </ReactSimplyCarousel>

                </div>
            </div>
        </div>
    )
}