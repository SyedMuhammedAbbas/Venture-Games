import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiRightArrowCircle } from "react-icons/bi";
import Link from "next/dist/client/link";

export default function ContactUs() {
  const address =
    "Office 201,Jan Centre 2nd Floor, Opp,Tooso, Bahadurabad, Karachi";
  const p_no = "+92 335 8243343";
  const email = "contact@venturegames.com";
  return (
    <>
      <div className=" bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] p-36 py-10  5xl:p-32 5xl:px-auto 4xl:p-20 2xl:p-10 tablet2.1:p-4 min-h-[140vh] max-h-[100%]">
        <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] text-center text-white font-hemi">
          Lets Get In Touch
        </div>
        <div className="grid gap-10 justify-center border-[1px] border-white rounded-[40px] p-10 mobile1:p-4 mobile1.1:p-2 pt-0">
          <div className="flex gap-24 xl:grid xl:grid-cols-1 mobile:grid-cols-1">
            <div className="grid xl:justify-center gap-5 pr-20 xl:pr-0 xl:pb-16 mt-6 border-r-[1px] xl:border-r-0 xl:border-b-[1px] border-white">
              <div className="mt-[40px]">
                <iframe
                  className="w-[550px] h-[400px] mx-auto mobile:w-[450px] mobile:h-[300px] mobile2.1:w-[350px] mobile2.1:h-[200px] mobile1.1:w-auto rounded-[40px]"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Venture Games, Office 201, Jan Centre 2nd Floor, opp. Tooso, Bahadurabad Karachi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="grid gap-3">
                <div className="text-white text-center text-[20px] mobile1.1:text-[15px]">
                  Enter your email to hear from us regularly
                </div>
                <div className="mobile:w-[450px] mobile2.1:w-[350px] mobile1.1:w-auto flex justify-center items-center">
                  <form className="bg-transparent border-[1px] border-white rounded-[40px]  text-white flex items-center">
                    <input
                      placeholder="youremail@gmail.com"
                      className="bg-transparent placeholder:text-blackOpac placeholder:text-[25px] text-[25px] mx-8 mobile:mx-3 w-[350px] mobile2.1:w-[270px] mobile1.1:w-[240px] h-[45px] outline-none"
                    ></input>
                    <button className="text-white text-[35px] pr-2">
                      <BiRightArrowCircle />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="grid">
                <div className="font-hemi text-[35px] mobile:text-[30px] text-white text-center">
                  Reach us at:
                </div>
                <div className="grid gap-3 justify-center text-center text-[20px] text-white border-[1px] border-white rounded-[40px] p-10 px-20 mobile2.1:px-10 mobile1.1:px-5">
                  {address}
                  <br />

                  <span className="border-y-[1px] border-white py-6">
                    {p_no}
                  </span>
                  <br />
                  <span className="mt-[-20px]">{email}</span>
                </div>
              </div>

              <div>
                <div className="font-hemi text-[40px] mobile:text-[30px] text-center text-white">
                  Follow Us:
                </div>
                <div className="flex gap-5 justify-center border-[1px] border-white rounded-[30px] p-10 mobile1.1:p-auto py-5">
                  {/* <div className="text-white text-[50px] mobile:text-[35px] border-r-[2px] pr-4">
                    <BsWhatsapp />
                  </div> */}
                  <a
                    target="_blank"
                    href="https://www.facebook.com/venturegamespk/"
                  >
                    <div className="text-white cursor-pointer text-[50px] mobile:text-[35px] border-r-[2px] pr-4">
                      <BsFacebook />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/venturegamespk/"
                  >
                    <div className="text-white text-[50px] mobile:text-[35px]">
                      <BsInstagram />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
