import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { store } from "../app/store";
import { Provider } from "react-redux";
import whatsapplogo from "../images/whatsapp-circle.png";
import initMyFirebase from "../firebase/FirebaseInit";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import ScrollToTop from "../components/common/ScrollToTop";
import Logo from "../images/logo.svg";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  initMyFirebase();
  // const jwtToken = JSON.stringify(window.localStorage.getItem("token"));

  // if (!jwtToken) {
  // }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/ns.html?id=GTM-57973S3"}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-57973S3', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <Header />
          <div className="h-[120px] tablet:h-[70px]">&nbsp;</div>
          {loading ? (
            <div className="bg-[#1A1A1A] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
              <img src={Logo.src} className="w-20 h-20 animate-spin" />
            </div>
          ) : (
            <body className="min-h-[14w0vh] mobile:min-h-screen max-h-[100%]">
              <ScrollToTop />
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
                href="https://wa.me/+923358243343"
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
          )}
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
