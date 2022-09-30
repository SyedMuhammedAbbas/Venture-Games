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
        <div className="h-[120px] tablet:h-[70px]">&nbsp;</div>
        <body>
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
          {/* <div className="h-[80px] tablet:h-[60px] ">&nbsp;</div> */}

          <div className="snap-start">
            <Footer />
          </div>
        </body>
      </Provider>
    </>
  );
}

export default MyApp;
