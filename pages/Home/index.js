import Banner from "../../components/home/Banner";
import ClientsView from "../../components/common/ClientsView";
import Featured from "../../components/home/Featured";
import PlatformsElement from "../../components/common/PlatformsElement";
import Sale from "../../components/home/Sale";
import TopGames from "../../components/home/TopGames";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function Home() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <div className="snap-both">
      <div>
        <ProfileBar
          cart={false}
          handleLogin={handleLogin}
          sethandleLogin={sethandleLogin}
          handleSignup={handleSignup}
          sethandleSignup={sethandleSignup}
        />
      </div>
      <div className="snap-center ">
        <TopGames />
      </div>
      <div className="snap-center">
        <Banner />
      </div>
      <div className="snap-center">
        <Sale />
      </div>
      <div className="snap-center">
        <PlatformsElement />
      </div>
      <div className="snap-center">
        <Featured />
      </div>
      <div className="snap-center">
        <ClientsView />
      </div>
    </div>
  );
}
