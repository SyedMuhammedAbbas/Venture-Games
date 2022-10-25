import ProfileBar from "../../components/common/ProfileBar";
import ShopProducts from "../../components/shop/ShopProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";

export default function Shop() {
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  // const [Cart, setCart] = useState([]);

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
      <div className="hidden tablet:block">
        <ProfileBarMobile />
      </div>
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopProducts handleFilter={handleFilter} handleSort={handleSort} />
      </div>
    </>
  );
}
