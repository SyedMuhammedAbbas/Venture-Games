import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";
import ShopGames from "../../components/shop/ShopGames";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";
import GamesCover from "../../components/shop/GamesCover";

export default function Games() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
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
        <GamesCover />
      </div>
      <div className="snap-start">
        <ShopGames
          handleFilter={handleFilter}
          handleSort={handleSort}
          handleFilterMobile={handleFilterMobile}
          handleSortMobile={handleSortMobile}
        />
      </div>
    </>
  );
}
