import Link from "next/link";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function Policies() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <div className="snap-start">
        <ProfileBar
          cartshow={true}
          handleLogin={handleLogin}
          sethandleLogin={sethandleLogin}
          handleSignup={handleSignup}
          sethandleSignup={sethandleSignup}
        />
      </div>
      <div className="bg-[#FFB636] snap-start text-[20px] min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] text-black pt-[10%] px-20 pb-20 tablet:pt-[20%] tablet:px-5">
        <h1 className="text-[45px]">
          <span className="underline ">Policies</span>
        </h1>
        <br></br>
        <ul className="flex flex-wrap justify-center gap-10">
          <Link href="/policies/privacy">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Privacy policy</span>
            </li>
          </Link>
          <Link href="/policies/shipping">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Shipping policy</span>
            </li>
          </Link>
          <Link href="/policies/payment">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Payment Policy</span>
            </li>
          </Link>
          <Link href="/policies/repairing">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Repairing policy</span>
            </li>
          </Link>
          <Link href="/policies/return">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Return policy</span>
            </li>
          </Link>
          <Link href="/policies/cancellation">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Cancellation policy</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
