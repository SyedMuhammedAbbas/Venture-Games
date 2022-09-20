import ClientsViewCard from "./ClientsViewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ClientsView() {
  const n = 3;
  var settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
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
  return (
    <div className="bg-[#FFB636] p-32 tablet:pt-20 4xl:px-20 3xl:px-14 2xl:px-10 xl:px-5 mobile1.1:px-2">
      <div className="bg-gradient-to-r from-black via-stone-700 to-black pt-10 shadow-lg shadow-gray-800">
        <div className="block">
          <div className="font-hemi text-white text-[80px] 3xl:text-[7vw] mobile:text-[40px] mobile1.1:text-[35px] mobilesm:text-[27px] text-center">
            What C
            <span className="justify-center border-y-8  border-[#FFB636]">
              lient
            </span>
            s Say
          </div>
          <div className="text-white px-10 text-[30px] mobile:text-[20px] tablet:pb-10 tablet:pt-10 text-center">
            We At Venture Games hjfsfnsjk fdkjsfns jkkfhsi jhsifjs nfjsk djadd
            ndja dnajkda djkad dabkjdbaw dnajk dnajkda
          </div>
        </div>

        <div className=" block w-[90vw]  mobile1.1:w-[100%] clientcards h-[500px] m-10 mx-auto">
          <Slider {...settings}>
            {[...Array(n)].map((user) => (
              <div key={user}>
                <ClientsViewCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
