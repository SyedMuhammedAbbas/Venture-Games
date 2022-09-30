import SaleCard from "./SaleCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { SaleProducts } from "./SaleProducts";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        fontSize: "80px",
        opacity: "1",
        color: "black",
      }}
    >
      <MdKeyboardArrowRight />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        // ...style,
        fontSize: "80px",
        opacity: "1",
        color: "black",
        transform: `translateX(${-295}%`,
      }}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
}

export default function Sale() {
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        {/* <div className="loading" /> */}
      </div>
    ),

    // centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grid bg-[#FFB636] relative py-[5vw] px-[40px] w-[100%] overflow-x-hidden justify-center pt-[80px] mobile:px-auto">
      <div className="border-[5px] border-black rounded-[35px] pb-3  w-[125vw] sale">
        <div className="flex">
          <div className="font-hemi text-black text-[80px] xl:text-[7vw] bg-[#FFB636] mt-[-60px] lg:mt-[-50px] mobile:mt-[-30px] mobile1:mt-[-20px] mobilesm:mt-[10px] ml-[7vw] px-[30px] ">
            Flash Sale
          </div>
          <div className="flex absolute right-32 xxl:right-24 4xl:right-20 mobile:right-10  mt-4">
            <Link href="/shop">
              <button className="flex text-black text-[30px] tablet2:text-[20px]">
                View all
                <div className="mt-0 text-[50px] tablet2:text-[35px]">
                  <MdKeyboardArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[110vw] mobile1.1:w-[95%] h-auto mx-auto my-10">
          <Slider {...settings}>
            {Object.values(SaleProducts).map((currentItem) => {
              return <SaleCard key={currentItem} product={currentItem} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
