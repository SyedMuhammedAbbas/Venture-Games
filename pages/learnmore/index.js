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
  const ClientSaydescription1 =
    "Venture Games is one of the earliest pioneers in the online gaming space. We provide authentic new & used consoles,accessories,cards & demanded game Cd’s to quench your thirst for gaming and satisfy the player in you. We make sure to provide notch services with local and international warranty for the items we sell. Don't wait further, order now to be a veteran player in your league.";
  const ClientSayheading1 = "what we do?";
  const ClientSayheading2 = "who we are?";
  const CeoName = "Mr Sufyan";
  const CeoHeading = "Vision and Vision";
  const CeoDescription =
    " we at venture games cjnbcdojb sjvsbvoisvofv sjnvso vsfo nvsfn oisnv ois v shdods vds sanv isn v sivd ndsap nv d ndsap nv we at venture games cjnbcdojb sjvsbv oisvofv sjnvso vsfo nv sfn oisnv ois v shdods vds sanvisn v sivd ndsap nv d ndsap we at venture games cjnbcdojb sjvs";
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
          heading={ClientSayheading1}
          description={ClientSaydescription1}
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
        <LearnMoreClientsSay
          heading={ClientSayheading2}
          description={ClientSaydescription1}
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
