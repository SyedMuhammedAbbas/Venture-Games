import Banner from "../../components/Banner";
import ClientsView from "../../components/ClientsView";
import Featured from "../../components/Featured";
import PlatformsElement from "../../components/PlatformsElement";
import Sale from "../../components/Sale";
import TopGames from "../../components/TopGames";
import ProfileBar from "../../components/ProfileBar";

export default function Home() {
  return (
    <div className="snap-both">
      <div>
        <ProfileBar cart={true} />
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
