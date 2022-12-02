import { MdKeyboardArrowRight } from "react-icons/md";
import FeaturedCard from "./FeaturedCard";
// import Spiderman from "../../images/image 4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
// import { FeaturedProducts } from "./FeaturedProducts";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRef } from "react";
// import { getProducts } from "../../features/counter/productsSlice";

export default function Featured({ products }) {
  // const Products = useSelector((state) => state.products.allProducts);
  // const Products = FeaturedProducts;
  // console.log(Products.length);
  const [Products, setProducts] = useState([]);
  const dataFetchedRef = useRef(false);
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
  async function fetchFeaturedProducts() {
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Featured: true,
      },
    });
    console.log(response);
    setProducts(
      response.data.filter(
        (v, i, a) =>
          a.findIndex((t) => t.ProductGroup._id === v.ProductGroup._id) === i
      )
    );
  }

  useEffect(() => {
    if (dataFetchedRef.current) {
      return;
    } else {
      dataFetchedRef.current = true;
      fetchFeaturedProducts().catch((error) => {
        console.error(error);
      });
    }
  }, []);

  return (
    <>
      {Products.length !== 0 && (
        <div className="grid relative justify-center bg-gradient-to-tr from-[#33250c] via-[#1A1A1A] to-[#33250c] min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] px-32 mobile:px-10 py-10  border-b-blackOpac border-b-2">
          <div className="flex pb-10">
            <div className="font-hemi pl-[10%] mobile:pl-0 text-[#FFB636] text-[80px] 2xl:text-[60px] lg:text-[40px] mobile:text-[40px] mobile1:text-[30px] lg:ml-5 mobile:ml-0 mobile:float-left">
              Featured Products
            </div>
            <div className="absolute right-[7%] mobile:mt-20 mt-14 lg:mb-5">
              <Link href="/featured">
                <button className="flex pr-[0%] text-[#FFB636] text-[30px] lg:text-[20px] mobile:mt-0">
                  <div>View all</div>
                  <div className="mt-0 text-[50px] lg:text-[35px]">
                    <MdKeyboardArrowRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {Products.length < 4 ? (
            <div className="w-[110vw] flex flex-wrap justify-center gap-10 featuredcards mx-auto my-auto h-auto mt-[40px] mb-10">
              {Object.values(Products).map((currentItem) => (
                <div key={currentItem}>
                  <FeaturedCard product={currentItem} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[110vw] featuredcards mx-auto my-auto h-auto mt-[40px] mb-10">
              <Slider {...settings}>
                {Object.values(Products)
                  .slice(0, 7)
                  .map((currentItem) => (
                    <div key={currentItem}>
                      <FeaturedCard product={currentItem} />
                    </div>
                  ))}
              </Slider>
            </div>
          )}
        </div>
      )}
    </>
  );
}
