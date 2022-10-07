import TopGamesSlide from "./TopGamesSlide";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TopGames() {
  const carouselproduct = useSelector(
    (state) => state.carouselProducts.Products
  );
  return (
    <div className="bg-[#FFB636] items-center min-h-[140vh] max-h-[100%] topgames">
      <div className="flex justify-center  bg-[url('../images/background.png')] bg-[length:700px_800px] pb-20 h-auto 4xl:bg-[length:700px_800px] tablet2:bg-[length:650px_750px] lg:bg-[length:550px_650px] tablet1:bg-[length:500px_600px] mobile:tablet1:bg-[length:500px_600px] bg-no-repeat bg-[left_40%_top_5rem] 4xl:bg-[left_25%_top_5rem] xl:bg-[left_25%_top_5rem] tablet1:bg-[left_25%_top_10px] tablet2:bg-[left_25%_top_0px] mobile:bg-[left_25%_top_-40px]">
        <>
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            centeredSlides={true}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {Object.values(carouselproduct).map((currentItem) => (
              <SwiperSlide>
                <TopGamesSlide key={currentItem} carouselProd={currentItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
}
