import ProductCard from "../../components/common/ProductCard";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Product(productId) {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return (
    <>
      <ProfileBar
        // cart={true}
        cartshow={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <ProductCard productId={parseInt(data["id"])} />
    </>
  );
}
