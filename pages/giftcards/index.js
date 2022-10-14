import ProfileBar from "../../components/common/ProfileBar";
import ShopProducts from "../../components/shop/ShopProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";

export default function GiftCards() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);

  return (
    <>
      <ProfileBar
        cart={false}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopProducts
          handleFilter={handleFilter}
          handleSort={handleSort}
          GiftCards={true}
        />
      </div>
    </>
  );
}
