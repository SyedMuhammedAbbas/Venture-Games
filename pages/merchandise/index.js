import ProfileBar from "../../components/common/ProfileBar";
import ShopMerchandise from "../../components/shop/ShopMerchandise";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";

export default function Shop() {
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  // const [Cart, setCart] = useState([]);

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
      <div className="hidden tablet:block">
        <ProfileBarMobile
          handleFilterMobile={handleFilterMobile}
          sethandleFilterMobile={sethandleFilterMobile}
          handleSortMobile={handleSortMobile}
          sethandleSortMobile={sethandleSortMobile}
        />
      </div>
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopMerchandise
          handleFilter={handleFilter}
          handleSort={handleSort}
          handleFilterMobile={handleFilterMobile}
          handleSortMobile={handleSortMobile}
        />
      </div>
    </>
  );
}
