import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";

export default function RepairingPolicies() {
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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] max-h-[100%] tablet:pt-[20%] tablet:px-10">
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
            <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
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
        <br></br>
        <br></br>
        <p>
          <strong>
            <span style={{ textDecoration: "underline" }}>Repairing </span>
          </strong>
          <strong>
            <span style={{ textDecoration: "underline" }}>Policy:</span>
          </strong>
        </p>
        <p>
          In accordance with our repair policy, we aim to fix console issues for
          customers in a typical turnaround time of 2 to 3 days. The client will
          be informed via the given contact details of the new delivery time in
          the event of any significant issues. The consumer will be responsible
          for covering any delivery costs incurred, for that matter.
        </p>
        <p>
          We offer a once-off, comprehensive seven-day warranty on any problem
          or component that has already undergone our repair, and if the problem
          reappears, we'll replace it free of charge.
        </p>
        <p>
          &nbsp;When a console is dead, the power supply or IC circuit is
          typically the problem, which we can fix. However, as our main duty was
          to get the console back in working order, if any other problem occurs
          in any other component after we return your devices, such as in the
          DVD ROM or any other component, it will be paid individually.
        </p>
      </div>
    </>
  );
}
