import ProfileBar from "../../components/common/ProfileBar";
import ShopFlashSaleProducts from "../../components/shop/ShopFlashSaleProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";

export default function GiftCards() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);

  return (
    <>
      <ProfileBar
        filter="true"
        sethandleFilter={sethandleFilter}
        handleFilter={handleFilter}
        sethandleSort={sethandleSort}
        handleSort={handleSort}
        cartshow={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <ProfileBarMobile category="FlashSale" />
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopFlashSaleProducts
          handleFilter={handleFilter}
          handleSort={handleSort}
        />
      </div>
    </>
  );
}
