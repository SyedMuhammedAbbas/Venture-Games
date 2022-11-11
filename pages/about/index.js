import ClientsView from "../../components/common/ClientsView";
import ContactUs from "../../components/about/ContactUs";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import LearnMoreCeo from "../../components/about/LearnMoreCeo";
import LearnMoreClientsSay from "../../components/about/LearnMoreClientsSay";
import LearnMoreHeading from "../../components/about/LearnMoreHeading";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function LearnMore() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const ClientSaydescription1 =
    "Venture Games is one of the earliest pioneers in the online gaming space. We provide authentic new & used consoles,accessories,cards & demanded game Cd’s to quench your thirst for gaming and satisfy the player in you. We make sure to provide notch services with local and international warranty for the items we sell. Don't wait further, order now to be a veteran player in your league.";
  const ClientSaydescription2 =
    "Venture Games was founded by a group of young & ardent mates in early 2019 to provide top-notch authentic new and used gaming consoles, accessories, gift cards, and well-known game CDs to satisfy your craving for professional gaming. With this mission, we strive to date to provide you with a convenient Buy, Sell & Exchange facility so that each day we progress to the goal that we founded Venture Games. We ensure the products we offer are supported by first-rate services that are warranted domestically and abroad. To progress to a seasoned player in your league.";
  const ClientSayheading1 = "what we do?";
  const ClientSayheading2 = "who we are?";
  const CeoName = "Team venture games";
  const CeoHeading = "Our Goal";
  const CeoDescription =
    "Venture Games envisions to support the gaming community by providing an automated first hand system. Here the customers can order or exchange their favorite products with peace of mind making us the first choice when it comes to gaming.";
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
        <LearnMoreClientsSay
          heading={ClientSayheading2}
          description={ClientSaydescription1}
        />
      </div>
      <div className="snap-center">
        <LearnMoreClientsSay
          heading={ClientSayheading1}
          description={ClientSaydescription2}
        />
      </div>

      <div className="snap-center">
        <LearnMoreCeo
          heading={CeoHeading}
          description={CeoDescription}
          name={CeoName}
        />
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
