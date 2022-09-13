import SaleCard from "./SaleCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState } from "react";
// import ReactSimplyCarousel from "react-simply-carousel";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination, Navigation } from "swiper";

export default function Sale() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="grid bg-[#FFB636] p-[5vw] w-[100%] overflow-x-hidden justify-center pt-[80px] mobile:px-1">
      <div className="border-[5px] border-black rounded-[35px] pb-3  w-[120vw]">
        <div className="flex">
          <div className="font-hemi text-black text-[80px] xl:text-[7vw] bg-[#FFB636] mt-[-60px] lg:mt-[-50px] mobile:mt-[-30px] mobile1:mt-[-20px] mobilesm:mt-[10px] ml-[7vw] px-[30px] ">
            Flash Sale
          </div>
          <div className="absolute right-[9%] tablet2:right-[7%] mt-4">
            <button className="flex text-black text-[30px] tablet2:text-[20px]">
              View all
              <div className="mt-0 text-[50px] tablet2:text-[35px]">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center   m-auto mt-8 mx-10 h-[700px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // freeMode={true}
            navigation={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 140,
              },
              440: {
                slidesPerView: 1,
                spaceBetween: 130,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 140,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
              740: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              840: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1040: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1140: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1240: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1340: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
            <SwiperSlide>
              <SaleCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
