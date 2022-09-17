import SaleCard from "./SaleCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState } from "react";
// import ReactSimplyCarousel from "react-simply-carousel";
// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/bundle";
import { Pagination, Navigation } from "swiper";
import Spiderman from "../images/image 4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        fontSize: "60px",
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
    <button
      className={className}
      onClick={onClick}
      style={{
        fontSize: "50px",
        opacity: "1",
        color: "black",
        // paddingLeft: "-20px",
      }}
    >
      <MdKeyboardArrowLeft />
    </button>
  );
}

export default function Sale() {
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,

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
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sale_products = [
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox", "nintendo"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
    {
      product_title: "Spiderman - Miles Morales",
      product_platform: ["ps4", "ps5", "xbox"],
      old_price: 15999,
      new_price: 11999,
      product_description:
        "Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man. Experience the Rise Of Miles Morales As The New Hero Masters Incredible, Explosive New Powers To Become His Own Spider-Man.",
      product_image: Spiderman.src,
    },
  ];

  return (
    <div className="grid bg-[#FFB636] py-[5vw] px-[40px] w-[100%] overflow-x-hidden justify-center pt-[80px] mobile:px-auto">
      <div className="border-[5px] border-black rounded-[35px] pb-3  w-[125vw] mobile1.1:w-[100%]">
        <div className="flex">
          <div className="font-hemi text-black text-[80px] xl:text-[7vw] bg-[#FFB636] mt-[-60px] lg:mt-[-50px] mobile:mt-[-30px] mobile1:mt-[-20px] mobilesm:mt-[10px] ml-[7vw] px-[30px] ">
            Flash Sale
          </div>
          <div className="relative flex  mt-4">
            <button className="flex text-black text-[30px] tablet2:text-[20px]">
              View all
              <div className="mt-0 text-[50px] tablet2:text-[35px]">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[100vw] mobile1.1:w-[90vw] mx-auto my-10">
          <Slider {...settings}>
            {sale_products.map((index) => (
              <SaleCard
                key={index}
                title={index.product_title}
                desp={index.product_description}
                platform={index.product_platform}
                image={index.product_image}
                oldPrice={index.old_price}
                newPrice={index.new_price}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
