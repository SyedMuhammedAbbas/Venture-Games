import ProfileBar from "../../components/common/ProfileBar";
import ShopProducts from "../../components/shop/ShopProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";

export default function Shop() {
  const [handle, sethandle] = useState(false);

  return (
    <>
      <ProfileBar
        filter="true"
        sethandle={sethandle}
        handle={handle}
        cart={true}
      />
      <ShopCover />
      <ShopProducts handle={handle} />
    </>
  );
}
