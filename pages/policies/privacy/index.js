import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";

export default function PrivacyPolicies() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <div className="snap-start">
        <ProfileBar
          cartshow={true}
          handleLogin={handleLogin}
          sethandleLogin={sethandleLogin}
          handleSignup={handleSignup}
          sethandleSignup={sethandleSignup}
        />
      </div>
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[125vh] max-h-[100%] tablet:pt-[20%] tablet:px-10">
        <ul className="flex flex-wrap justify-center gap-10">
          <Link href="/policies/privacy">
            <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Privacy policy</span>
            </li>
          </Link>
          <Link href="/policies/shipping">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Shipping policy</span>
            </li>
          </Link>
          <Link href="/policies/payment">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Payment Policy</span>
            </li>
          </Link>
          <Link href="/policies/repairing">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Repairing policy</span>
            </li>
          </Link>
          <Link href="/policies/return">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Return policy</span>
            </li>
          </Link>
          <Link href="/policies/cancellation">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Cancellation policy</span>
            </li>
          </Link>
        </ul>
        <br></br>
        <br></br>
        <ul>
          <li>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  Privacy policy
                </span>
              </strong>
            </p>
            <p>
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from
              venturegames.com&nbsp; (the “Site”).
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  Personal information we collect
                </span>
              </strong>
            </p>
            <p>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as “Device
              Information”.
            </p>
            <p>&nbsp;</p>
            <p>
              We collect Device Information using the following technologies:
            </p>
            <p>
              - “Cookies” are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              http://www.allaboutcookies.org.
            </p>
            <p>
              - “Log files” track actions occurring on the Site, and collect
              data including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps.
            </p>
            <p>
              - “Web beacons”, “tags”, and “pixels” are electronic files used to
              record information about how you browse the Site.
            </p>
            <p>&nbsp;</p>
            <p>
              Additionally when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, billing address, shipping address,
              payment information (including credit card numbers), email
              address, and phone number. We refer to this information as “Order
              Information”.
            </p>
            <p>&nbsp;</p>
            <p>
              When we talk about “Personal Information” in this Privacy Policy,
              we are talking both about Device Information and Order
              Information.
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  How do we use your personal information?{" "}
                </span>
              </strong>
            </p>
            <p>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to:
            </p>
            <p>- Communicate with you;</p>
            <p>- Screen our orders for potential risk or fraud; and</p>
            <p>
              - When in line with the preferences you have shared with us,
              provide you with information or advertising relating to our
              products or services.
            </p>
            <p>&nbsp;</p>
            <p>
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (in particular, your IP address), and
              more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact
              with the Site, and to assess the success of our marketing and
              advertising campaigns).&nbsp;
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  Sharing your personal Information{" "}
                </span>
              </strong>
            </p>
            <p>
              We share your Personal Information with third parties to help us
              use your Personal Information, as described above. We use Google
              Analytics to help us understand how our customers use the Site --
              you can read more about how Google uses your Personal Information
              here: https://www.google.com/intl/en/policies/privacy/. You can
              also opt-out of Google Analytics here:
              https://tools.google.com/dlpage/gaoptout.
            </p>
            <p>&nbsp;</p>
            <p>
              Finally, we may also share your Personal Information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant or other lawful request for information we receive,
              or to otherwise protect our rights.
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  Behavioral advertising{" "}
                </span>
              </strong>
            </p>
            <p>
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page at
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </p>
            <p>&nbsp;</p>
            <p>
              You can opt out of targeted advertising by using the links below:
            </p>
            <p>- Facebook: https://www.facebook.com/settings/?tab=ads</p>
            <p>- Google: https://www.google.com/settings/ads/anonymous</p>
            <p>&nbsp;</p>
            <p>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
              http://optout.aboutads.info/.
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  Do not track{" "}
                </span>
              </strong>
            </p>
            <p>
              Please note that we do not alter our Site’s data collection and
              use practices when we see a Do Not Track signal from your browser.
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  Data retention{" "}
                </span>
              </strong>
            </p>
            <p>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ textDecoration: "underline" }}>Contact us </span>
              </strong>
            </p>
            <p>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us via any of our social media handles or by using the
              Contact Us Box addressing to the Compliance team.
            </p>
            <p>&nbsp;</p>
          </li>
        </ul>
      </div>
    </>
  );
}
