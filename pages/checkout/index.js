import CheckOut from "../../components/cart/CheckOut";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function CheckOutPage() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <div>
        <ProfileBar
          cartshow={true}
          handleLogin={handleLogin}
          sethandleLogin={sethandleLogin}
          handleSignup={handleSignup}
          sethandleSignup={sethandleSignup}
        />
        <div className="snap-start">
          <CheckOut />
        </div>
      </div>
    </>
  );
}
