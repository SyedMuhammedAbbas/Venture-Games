import ProfileBar from "../../components/common/ProfileBar";
import ShopAccessories from "../../components/shop/ShopAccessories";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";

export default function Accessories() {
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
      <ProfileBarMobile category="Accessories" />
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopAccessories handleFilter={handleFilter} handleSort={handleSort} />
      </div>
    </>
  );
}
