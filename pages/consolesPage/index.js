import ProfileBar from "../../components/common/ProfileBar";
import ShopConsoles from "../../components/shop/ShopConsoles";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import { useRouter } from "next/router";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";

export default function ShopPlatformsPage(platforms) {
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const router = useRouter();
  const selectedPlatform = router.query.selectedPlatform;
  console.log(selectedPlatform);
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
        <ShopConsoles
          handleFilter={handleFilter}
          handleSort={handleSort}
          selectedPlatforms={selectedPlatform}
          handleFilterMobile={handleFilterMobile}
          handleSortMobile={handleSortMobile}
        />
      </div>
    </>
  );
}
