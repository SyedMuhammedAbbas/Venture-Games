import { MdKeyboardArrowRight } from "react-icons/md";
import FeaturedCard from "./FeaturedCard";
import Spiderman from "../../images/image 4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FeaturedProducts } from "./FeaturedProducts";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../features/counter/productsSlice";

export default function Featured({ products }) {
  const Products = useSelector((state) => state.products.allProducts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  // const list = Products.length;
  console.log(Products.length);
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    // slidesToShow: 4,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
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
        breakpoint: 1380,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="grid relative bg-[#FFB636] min-h-[140vh] max-h-[100%] px-32 py-10  border-b-black border-b-8">
      <div className="flex pb-10">
        <div className="font-hemi pl-[10%] text-black text-[80px] 2xl:text-[60px] lg:text-[40px] mobile:text-[40px] mobile1:text-[30px] lg:ml-5 ">
          Featured Products
        </div>
        <div className="absolute right-[7%] mobile:mt-20 mt-14 lg:mb-5">
          <Link href="/shop">
            <button className="flex pr-[0%] text-black text-[30px] lg:text-[20px] mobile:mt-0">
              <div>View all</div>
              <div className="mt-0 text-[50px] lg:text-[35px]">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </div>
      {Products.length < 4 ? (
        <div className="w-[110vw] featuredcards mx-auto my-auto h-auto mt-[40px] mb-10">
          <Slider {...settings}>
            {Object.values(Products).map((currentItem) => (
              <div key={currentItem}>
                <FeaturedCard product={currentItem} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center mt-[40px] mb-10">
          {Object.values(Products).map((currentItem) => (
            <div key={currentItem}>
              <FeaturedCard product={currentItem} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
