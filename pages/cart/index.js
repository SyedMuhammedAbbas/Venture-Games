import ShoppingCart from "../../components/cart/ShoppingCart";
import { useState } from "react";
import ProfileBar from "../../components/common/ProfileBar";

export default function Cart({ cart }) {
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
      />
      <div className="snap-start">
        <ShoppingCart />
      </div>
    </>
  );
}
