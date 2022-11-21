import React, { useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
                in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="fixed w-[100%] m-auto mb-[50px] flex justify-center bottom-[20px] h-[20px] text-[2.4rem] mobile:text-[25px] mobile:left-0 mobile:justify-center mobile:bottom-4 mobile:mb-[10px] z-[99999] cursor-pointer text-black">
      <HiArrowSmUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="text-[#FFB636] bg-black rounded-full"
      />
    </div>
  );
}
