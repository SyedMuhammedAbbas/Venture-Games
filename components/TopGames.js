import Spiderman from "../images/image 4.png";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import TopGamesSlide from "./TopGamesSlide";

export default function TopGames() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="bg-[#FFB636] pt-[150px] lg:pt-[80px] tablet:pt-[50px]">
      <div className=" bg-[url('../images/background.png')] bg-[length:700px_800px] 4xl:bg-[length:600px_700px] lg:bg-[length:550px_650px] tablet1:bg-[length:500px_600px] bg-no-repeat bg-[left_15vw_top_5rem] 4xl:bg-[left_20%_top_5rem] xl:bg-[left_10%_top_5rem] tablet1:bg-[left_5%_top_2rem]">
        <>
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            infinite={{ show: true }}
            centerMode={true}
            autoplay={{
              show: true,
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: 12,
                  width: 12,
                  borderRadius: "50%",
                  border: 0,
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  background: "black",
                  transition: "all 0.3s",
                },
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
                  transition: "all 0.3s",
                },
              },
            }}
            speed={700}
            delay={700}
            easing="linear"
          >
            <div className="">
              <TopGamesSlide />
            </div>
            <div className="">
              <TopGamesSlide />
            </div>
            <div className="">
              <TopGamesSlide />
            </div>
            <div className="">
              <TopGamesSlide />
            </div>
            <div className="">
              <TopGamesSlide />
            </div>
          </ReactSimplyCarousel>
          {/* <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // slidesPerView={"auto"}
            // navigation
            pagination={{
              clickable: true,
            }}
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
            ...
          </Swiper> */}
        </>
      </div>
    </div>
  );
}
