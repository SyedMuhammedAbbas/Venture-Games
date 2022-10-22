import Payment from "../../components/cart/Payment";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function PaymentPage() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <ProfileBar
        cartshow={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
        back={true}
      />
      <div className="snap-start">
        <Payment />
      </div>
    </>
  );
}
