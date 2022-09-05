// import { icons } from "react-icons"
import { BsWhatsapp } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BiRightArrowCircle } from "react-icons/bi"

export default function ContactUs() {

    return (
        <>
            <div className=" bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] p-36 py-10  5xl:p-32 5xl:px-auto 4xl:p-20 2xl:p-10 mobile:p-4">
                <div className="text-[90px] 2xl:text-[70px] lg:text-[50px] tablet:text-[40px] text-center text-white font-hemi">Lets Get In Touch</div>
                <div className="grid gap-10 justify-center border-[1px] border-white rounded-[40px] p-10 pt-0">

                    <div className="flex gap-24 xl:grid xl:grid-cols-2 mobile:grid-cols-1">
                        <div className="grid gap-5">
                            <div className="mt-[40px]">
                                <iframe className="w-[550px] h-[400px] rounded-[40px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.445961056183!2d67.06400031538256!3d24.882765484043478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f89456e683f%3A0xfd726b4100cc89b5!2sVenture%20Games!5e0!3m2!1sen!2s!4v1662366835600!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="grid gap-3">
                                <div className="text-white text-center text-[20px]">
                                    Enter your email to hear from us regularly
                                </div>
                                <div>
                                    <form className="bg-transparent border-[1px] border-white rounded-[40px]  text-white">
                                        <input className="bg-transparent mx-8 w-[350px] h-[45px] outline-none"></input>
                                        <button className="text-white float-right pr-1 pt-[5px] text-[35px]"><BiRightArrowCircle /></button>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="grid gap-5">
                            <div className="grid">
                                <div className="font-hemi text-[35px] text-white text-center">
                                    Reach us at:
                                </div>
                                <div className="grid gap-3 justify-center text-center text-[20px] text-white border-[1px] border-white rounded-[40px] p-10 px-20">
                                    Office 201,Jan Centre 2nd Floor,<br />
                                    Opp,Tooso, Bahadurabad, Karachi<br />
                                    <span className="border-y-[1px] border-white py-6">+92 335 8243343</span><br />
                                    <span className="mt-[-20px]">contact@venturegames.com</span>
                                </div>
                            </div>

                            <div>
                                <div className="font-hemi text-[40px] text-center text-white">
                                    Follow Us:
                                </div>
                                <div className="flex gap-5 justify-center border-[1px] border-white rounded-[40px] p-10 py-5">
                                    <div className="text-white text-[50px] border-r-[2px] pr-4"><BsWhatsapp /></div>
                                    <div className="text-white text-[50px] border-r-[2px] pr-4"><BsFacebook /></div>
                                    <div className="text-white text-[50px]"><BsInstagram /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}