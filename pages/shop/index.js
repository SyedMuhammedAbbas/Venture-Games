import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileBar from "../../components/ProfileBar";
import ShopProducts from "../../components/ShopProducts";
import { useState } from "react";
import ShopCover from "../../components/ShopCover";

export default function Shop() {
  const [handle, sethandle] = useState(false);

  return (
    <>
      {/* <Header /> */}
      <ProfileBar
        filter="true"
        sethandle={sethandle}
        handle={handle}
        cart={true}
      />
      <ShopCover />
      <ShopProducts handle={handle} />
      {/* <Footer /> */}
    </>
  );
}
