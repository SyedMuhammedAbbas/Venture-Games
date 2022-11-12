import React from "react";
import axios from "axios";

function index() {
  async function verification() {
    let jwtToken = JSON.parse(localStorage.getItem("token"));
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.get(
      "https://api.venturegames.pk/SendVerification",
      config
    );
    console.log(response);
    localStorage.clear();
    if (response.data == "Email Sent") {
      alert("Check your email");
    }
  }
  return (
    <div className="bg-[#1A1A1A] snap-start grid justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
      <div className="grid justify-center gap-5 text-[#fffff] text-[25px] mobile:text-[20px]">
        <div>Kindly Verify your mail by clicking on the following button</div>
        <div className="flex justify-center">
          <button
            className=" text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] w-[150px] h-12 mobile1:h-8 rounded-md text-[25px] mobile:text-[20px] hover:bg-[#FFB636] hover:text-black cursor-pointer"
            onClick={() => {
              verification();
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
