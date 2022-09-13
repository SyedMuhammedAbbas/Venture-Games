import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileBar from "../components/ProfileBar";
import Head from "next/head";
import Home from "./home";

export default function Index() {
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

      {/* <Header /> */}
      <Home />
      <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      {/* <Footer /> */}
    </>
  );
}
