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
import Logo from "../../images/logo.svg";

export default function Home() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const dispatch = useDispatch();

  async function getCart() {
    let jwtToken = JSON.parse(localStorage.getItem("token"));
    console.log(jwtToken);
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
        "Content-Type": "application/json",
      },
    };
    if (jwtToken != null) {
      let response = await axios.get(
        "https://api.venturegames.pk/GetCart",
        config
      );
      console.log(response.data);
      if (response.data.CartItems.length > 0) {
        dispatch(setCartItem(response.data));
      }
    }
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let jwtToken = localStorage.getItem("token");
    console.log(jwtToken);
    if (jwtToken) {
      try {
        getCart();
      } catch (e) {
        console.error(e);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        {loading ? (
          <div className="bg-[#1A1A1A] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
            <img src={Logo.src} className="w-20 h-20 animate-spin" />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}
