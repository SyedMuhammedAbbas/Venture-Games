import ClientsView from "../../components/common/ClientsView";
import ContactUs from "../../components/learnmore/ContactUs";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import LearnMoreCeo from "../../components/learnmore/LearnMoreCeo";
import LearnMoreClientsSay from "../../components/learnmore/LearnMoreClientsSay";
import LearnMoreHeading from "../../components/learnmore/LearnMoreHeading";
import ProfileBar from "../../components/common/ProfileBar";

export default function LearnMore() {
  return (
    <>
      <ProfileBar cart={true} />
      <LearnMoreHeading />
      <LearnMoreClientsSay />
      <LearnMoreCeo />
      <ClientsView />
      <ContactUs />
    </>
  );
}
