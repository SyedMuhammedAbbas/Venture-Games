import Banner from "../components/Banner";
import ClientsView from "../components/ClientsView";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PlatformsElement from "../components/PlatformsElement";
import ProfileBar from "../components/ProfileBar";
import Sale from "../components/Sale";
import TopGames from "../components/TopGames";

export default function Home() {
  return (
    <>
      <header>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      </header>
      <Header />
      <ProfileBar />
      <TopGames />
      <Banner />
      <Sale />
      <PlatformsElement />
      <Featured />
      <ClientsView />
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </>
  )
}
