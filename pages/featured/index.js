import ProfileBar from "../../components/common/ProfileBar";
import ShopFeaturedProducts from "../../components/shop/ShopFeaturedProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";

export default function GiftCards() {
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [handleFilterMobile, sethandleFilterMobile] = useState(false);
  const [handleSortMobile, sethandleSortMobile] = useState(false);

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
      <ProfileBarMobile
        handleFilterMobile={handleFilterMobile}
        sethandleFilterMobile={sethandleFilterMobile}
        handleSortMobile={handleSortMobile}
        sethandleSortMobile={sethandleSortMobile}
      />
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopFeaturedProducts
          handleFilter={handleFilter}
          handleSort={handleSort}
          handleFilterMobile={handleFilterMobile}
          handleSortMobile={handleSortMobile}
        />
      </div>
    </>
  );
}
