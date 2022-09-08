import Banner from "../components/Banner";
import ClientsView from "../components/ClientsView";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PlatformsElement from "../components/PlatformsElement";
import ProfileBar from "../components/ProfileBar";
import Sale from "../components/Sale";
import TopGames from "../components/TopGames";
import LearnMore from "./learnmore";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700"
        />
        <link
          rel="stylesheet"
          href="https://raw.github.com/FortAwesome/Font-Awesome/master/docs/assets/css/font-awesome.min.css"
        />
      </Head>
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
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </>
  );
}
