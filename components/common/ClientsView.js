import ClientsViewCard from "./ClientsViewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ClientsData } from "./ClientsData";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ClientsView() {
  const n = 7;

  var settings = {
    infinite: true,
    speed: 400,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots",
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--customClientViewPage"></div>
    ),
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [Reviews, setReviews] = useState();
  async function getReviews() {
    let response = await axios.get("https://api.venturegames.pk/ViewReview");
    setReviews(response.data);
  }
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#805712] via-black to-[#805712] min-h-[140vh] clientsViewIos max-h-[100%] p-32 tablet:py-14 4xl:px-20 3xl:px-14 2xl:px-10 xl:px-5 mobile1.1:px-2">
      <div className="bg-gradient-to-b from-[#141414] via-stone-700 to-[#2a2a2a] pt-10 shadow-lg shadow-gray-800">
        <div className="block">
          <div className="font-hemi text-white text-[80px] 3xl:text-[7vw] mobile:text-[40px] mobile1.1:text-[35px] mobilesm:text-[27px] text-center">
            What C
            <span className="justify-center border-y-8  border-[#FFB636]">
              lient
            </span>
            s Say
          </div>
          <div className="text-white px-10 text-[30px] mobile:text-[20px] tablet:pb-10 tablet:pt-10 text-center">
            Our works speaks for it self. Here is what our customers say about
            us.
          </div>
        </div>

        {Reviews && (
          <div className=" block w-[90vw] justify-center  mobile1.1:w-[100%] clientcards h-[550px] m-10 mx-auto">
            <Slider {...settings}>
              {Reviews.map((user) => (
                <div key={user._id}>
                  <ClientsViewCard client={user} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}
