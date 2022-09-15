import ClientsView from "../../components/ClientsView";
import ContactUs from "../../components/ContactUs";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import LearnMoreCeo from "../../components/LearnMoreCeo";
import LearnMoreClientsSay from "../../components/LearnMoreClientsSay";
import LearnMoreHeading from "../../components/LearnMoreHeading";
import ProfileBar from "../../components/ProfileBar";

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
