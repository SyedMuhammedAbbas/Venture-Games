import TopGamesSlide from "./TopGamesSlide";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import SpidermanCover from "../../images/sliderCover/spidermanCover.jpg";
import Cover from "../../images/sliderCover/Cover.jpg";

export default function TopGames() {
  // const carouselproduct = useSelector(
  //   (state) => state.carouselProducts.Products
  // );
  //   const [carouselproduct, setCorouselProduct] = useState([]);
  //   async function getCorousel() {
  //     let response = await axios.get("https://api.venturegames.pk/ViewCarousel");
  //     console.log(response.data);
  //     setCorouselProduct(response.data);
  //   }
  //   useEffect(() => {
  //     getCorousel();
  //   }, []);
  const CoverSlider = [SpidermanCover.src, Cover.src];
  let jwtToken = JSON.parse(localStorage.getItem("token"));
  console.log(jwtToken);
  return (
    // <div className="bg-gradient-to-tr from-[#805712] via-black to-[#805712] h-[100%] border-b-blackOpac border-b-2">
    //   <div className="flex justify-center  bg-[url('../images/background.png')] bg-[length:900px_1000px] pb-20 h-auto 4xl:bg-[length:950px_1050px] tablet2:bg-[length:850px_950px] lg:bg-[length:750px_850px] tablet1:bg-[length:600px_700px] mobile:tablet1:bg-[length:700px_800px] bg-no-repeat bg-[left_25%_top_5rem] 4xl:bg-[left_20%_top_5rem] xl:bg-[left_25%_top_5rem] tablet1:bg-[left_25%_top_10px] tablet2:bg-[left_25%_top_0px] mobile:bg-[left_25%_top_-40px]">
    <div className="flex min-w-[100vw] max-w-[100%] h-[100%]">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={true}
        // autoplay={true}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {CoverSlider.map((currentItem) => (
          <SwiperSlide>
            <TopGamesSlide key={currentItem} carouselProd={currentItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    //   </div>
    // </div>
  );
}
