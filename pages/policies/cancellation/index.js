import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";

export default function Cancellation() {
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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[125vh] max-h-[100%] tablet:pt-[20%] tablet:px-10">
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
            <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Cancellation policy</span>
            </li>
          </Link>
        </ul>
        <br></br>
        <br></br>
        <p>
          <strong>
            <span style={{ textDecoration: "underline" }}>
              Cancellation Policy:
            </span>
          </strong>
        </p>
        <p>
          Venture Games reserves all rights to cancel the order, whether in
          transit or at any stage, with or without disclosing the reason. In
          case of cancellation from our side, the delivery charges will be borne
          by us.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;If the customer cancels the order, the parcel hasn’t been
          dispatched yet &amp; the payment mode is online, and the entire amount
          will be refunded without deduction. However, if the order has been
          dispatched from our end, then the customer wouldn’t be able to issue a
          cancellation from his end.
        </p>
      </div>
    </>
  );
}
