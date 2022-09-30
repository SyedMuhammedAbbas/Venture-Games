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
        cartshow={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <div className="snap-center">
        <LearnMoreHeading />
      </div>
      <div className="snap-center">
        <LearnMoreClientsSay />
      </div>
      <div className="snap-center">
        <LearnMoreCeo />
      </div>
      <div className="snap-center">
        <LearnMoreClientsSay />
      </div>
      <div className="snap-center">
        <ClientsView />
      </div>
      <div className="snap-center">
        <ContactUs />
      </div>
    </>
  );
}
