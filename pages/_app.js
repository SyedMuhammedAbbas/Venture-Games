import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../styles/globals.css";
import { useState } from "react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import whatsapplogo from "../images/whatsapp-circle.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <a
          href="https://wa.me/2348100000000"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fa fa-whatsapp whatsapp-icon"></i> */}
          <img src={whatsapplogo.src}></img>
        </a>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
