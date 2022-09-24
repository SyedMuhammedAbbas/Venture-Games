import ProductCard from "../../components/common/ProductCard";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function Product() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <ProfileBar
        // cart={true}
        cart={false}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <ProductCard />
    </>
  );
}
