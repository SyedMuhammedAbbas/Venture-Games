import ProfileBar from "../../components/common/ProfileBar";
import ShopProducts from "../../components/shop/ShopProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ShopPlatforms from "../../components/shop/ShopPlatforms";
import { useRouter } from "next/router";

export default function ShopPlatformsPage(platforms) {
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const router = useRouter();
  const selectedPlatform = router.query.selectedPlatform;
  console.log(selectedPlatform);
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
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopPlatforms
          handleFilter={handleFilter}
          handleSort={handleSort}
          selectedPlatforms={selectedPlatform}
        />
      </div>
    </>
  );
}
