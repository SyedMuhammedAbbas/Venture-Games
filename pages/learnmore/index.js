import ClientsView from "../../components/common/ClientsView";
import ContactUs from "../../components/learnmore/ContactUs";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import LearnMoreCeo from "../../components/learnmore/LearnMoreCeo";
import LearnMoreClientsSay from "../../components/learnmore/LearnMoreClientsSay";
import LearnMoreHeading from "../../components/learnmore/LearnMoreHeading";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function LearnMore() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <ProfileBar
        cart={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <LearnMoreHeading />
      <LearnMoreClientsSay />
      <LearnMoreCeo />
      <ClientsView />
      <ContactUs />
    </>
  );
}
