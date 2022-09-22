import ProfileBar from "../../components/common/ProfileBar";
import ShopProducts from "../../components/shop/ShopProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";

export default function Shop() {
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
        cart={true}
      />
      <ShopCover />
      <ShopProducts handleFilter={handleFilter} handleSort={handleSort} />
    </>
  );
}
