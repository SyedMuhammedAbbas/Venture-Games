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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <Header />
      <ProfileBar />
      <TopGames />
      <Banner />
      <Sale />
      <PlatformsElement />
      <Featured />
      <ClientsView />
      <Footer />
    </>
  )
}
