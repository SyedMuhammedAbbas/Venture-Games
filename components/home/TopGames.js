// import Spiderman from "../../images/image 4.png";
import { useState } from "react";
// import ReactSimplyCarousel from "react-simply-carousel";
import TopGamesSlide from "./TopGamesSlide";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TopGames() {
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="bg-[#FFB636] pt-[150px] pb-[90px] mobile:pb-0 lg:pt-[80px] tablet:pt-[40px] h-auto topgames">
      <div className=" bg-[url('../images/background.png')] bg-[length:700px_800px] pb-20 h-auto 4xl:bg-[length:700px_800px] tablet2:bg-[length:650px_750px] lg:bg-[length:550px_650px] tablet1:bg-[length:500px_600px] mobile:tablet1:bg-[length:500px_600px] bg-no-repeat bg-[left_25%_top_5rem] 4xl:bg-[left_25%_top_5rem] xl:bg-[left_25%_top_5rem] tablet1:bg-[left_25%_top_10px] tablet2:bg-[left_25%_top_0px] mobile:bg-[left_25%_top_-40px]">
        <>
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            // effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={true}
            loop={true}
            // slidesPerView={"auto"}
            // navigation
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <TopGamesSlide />
            </SwiperSlide>
            <SwiperSlide>
              <TopGamesSlide />
            </SwiperSlide>
            <SwiperSlide>
              <TopGamesSlide />
            </SwiperSlide>
            <SwiperSlide>
              <TopGamesSlide />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
