import ClientsViewCard from "./ClientsViewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ClientsView() {
  const n = 3;
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,

    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
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

        <div className="flex xl2:hidden flex-wrap m-[50px] lg:m-10 gap-20 justify-center pb-[50px]">
          {[...Array(n)].map((user) => (
            <div key={user}>
              <ClientsViewCard />
            </div>
          ))}
        </div>
        <div className="hidden xl2:block xl2:w-[90vw]  mobile1.1:w-[100%] clientcards xl2:h-[500px] xl2:m-10 xl2:mx-auto">
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
