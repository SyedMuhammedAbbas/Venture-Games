import SaleCard from "./SaleCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import axios from "axios";
// import { SaleProducts } from "./SaleProducts";
import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useRef } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        fontSize: "80px",
        opacity: "1",
        color: "#FFB636",
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
        color: "#FFB636",
        transform: `translateX(${-295}%`,
      }}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
}

export default function Sale() {
  const [SaleProducts, setSaleProducts] = useState([]);
  const dataFetchedRef = useRef(false);

  async function fetchSaleProducts() {
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Sale: true,
      },
    });
    console.log(response);
    setSaleProducts(
      response.data.filter(
        (v, i, a) =>
          a.findIndex((t) => t.ProductGroup._id === v.ProductGroup._id) === i
      )
    );
    // setSaleProducts(response.data);
  }

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

  useEffect(() => {
    if (dataFetchedRef.current) {
      return;
    } else {
      dataFetchedRef.current = true;
      fetchSaleProducts().catch((error) => {
        console.error(error);
      });
      console.log("i fire once");
    }
  }, []);

  return (
    <div className="grid bg-[#1A1A1A] min-h-[100vh] max-h-[100%]  px-[40px] w-[100%] overflow-x-hidden justify-center py-[10%] mobile:px-auto">
      <div className="border-[5px] relative border-[#FFB636] rounded-[35px] pb-3  w-[125vw] sale">
        <div className="flex">
          <div className="font-hemi text-[#FFB636] text-[80px] xl:text-[7vw] bg-[#1A1A1A] mt-[-60px] lg:mt-[-50px] mobile:mt-[-30px] mobile1:mt-[-20px] mobilesm:mt-[10px] ml-[7vw] px-[30px] ">
            Flash Sale
          </div>
          <div className="flex absolute right-32 xxl:right-24 4xl:right-20 mobile:right-10  mt-4">
            <Link href="/flashSale">
              <button className="flex text-[#FFB636] text-[30px] tablet2:text-[20px]">
                View all
                <div className="mt-0 text-[50px] tablet2:text-[35px]">
                  <MdKeyboardArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>
        {SaleProducts.length < 4 ? (
          <div className="w-[110vw] flex flex-wrap justify-center gap-10 mobile1.1:w-[95%] h-auto mx-auto my-20">
            {Object.values(SaleProducts).map((currentItem) => {
              return <SaleCard key={currentItem} product={currentItem} />;
            })}
          </div>
        ) : (
          <div className="w-[110vw] block justify-center mobile1:w-[90vw] h-auto mx-auto my-20">
            <Slider {...settings}>
              {Object.values(SaleProducts)
                .slice(0, 7)
                .map((currentItem) => {
                  return <SaleCard key={currentItem} product={currentItem} />;
                })}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}
