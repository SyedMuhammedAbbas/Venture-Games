import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";

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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] tablet:pt-[20%] tablet:px-10">
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
