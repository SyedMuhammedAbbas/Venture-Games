import Banner from "../../components/home/Banner";
import ClientsView from "../../components/common/ClientsView";
import Featured from "../../components/home/Featured";
import PlatformsElement from "../../components/common/PlatformsElement";
import Sale from "../../components/home/Sale";
import TopGames from "../../components/home/TopGames";
import ProfileBar from "../../components/common/ProfileBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCartItem } from "../../features/counter/cartSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const dispatch = useDispatch();

  let jwtToken = JSON.parse(localStorage.getItem("token"));
  console.log(jwtToken);
  async function getCart() {
    let jwtToken = JSON.parse(localStorage.getItem("token"));
    console.log(jwtToken);
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    if (jwtToken) {
      let response = await axios.get(
        "https://api.venturegames.pk/GetCart",
        config
      );
      console.log(response.data.CartItems);
      if (response.data.CartItems.length > 0) {
        dispatch(setCartItem(response.data.CartItems));
      }
    }
  }

  useEffect(() => {
    try {
      getCart();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <div>
        <ProfileBar
          cartshow={true}
          handleLogin={handleLogin}
          sethandleLogin={sethandleLogin}
          handleSignup={handleSignup}
          sethandleSignup={sethandleSignup}
        />
        <div className="snap-start ">
          <TopGames />
        </div>
        <div className="snap-center ">
          <Banner />
        </div>
        <div className="snap-center ">
          <Sale />
        </div>
        <div className="snap-center ">
          <PlatformsElement />
        </div>
        <div className="snap-center">
          <Featured />
        </div>
        <div className="snap-center ">
          <ClientsView />
        </div>
      </div>
    </>
  );
}
