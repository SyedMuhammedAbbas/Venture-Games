import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../styles/globals.css";
import { useState } from "react";
import Context from "../context/Context";

function MyApp({ Component, pageProps }) {
  const [Cart, setCart] = useState([]);
  return (
    <>
      <Context>
        <Header />
        <Component {...pageProps} Cart={Cart} setCart={setCart} />
        <Footer />
      </Context>
    </>
  );
}

export default MyApp;
