import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../styles/globals.css";
import { useState } from "react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import whatsapplogo from "../images/whatsapp-circle.png";
import initMyFirebase from "../firebase/FirebaseInit";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  initMyFirebase();
  return (
    <>

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <link rel="shortcut icon" href="/images/logo.png" />
          </Head>
          <Header />
          <div className="h-[120px] tablet:h-[70px]">&nbsp;</div>
          <body>
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="dark"
            />
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
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
