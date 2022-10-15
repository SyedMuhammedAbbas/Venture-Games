import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";

export default function ShippingPolicies() {
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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] tablet:pt-[20%] tablet:px-10">
        <ul className="flex flex-wrap justify-center gap-10">
          <Link href="/policies/privacy">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Privacy policy</span>
            </li>
          </Link>
          <Link href="/policies/shipping">
            <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
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
        <p>
          <strong>
            <span style={{ textDecoration: "underline" }}>Shipping Policy</span>
          </strong>
          :
        </p>
        <p>
          We fulfill our orders via Leopard Courier Service all across Pakistan.
          Our Shipping policy includes a delivery time of 24 hours in Karachi
          and 2 to 3 business working days Pakistan-wide as overnight shipment.
          The fulfillment lead time begins when the company receives the
          package.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;All orders received before 3 PM or 15:00 HRS will be dispatched
          to Leopards the same day and will be in their warehouse at night,
          ready to ship the next morning in 2 working days.
        </p>
        <p>&nbsp;&nbsp;</p>
        <p>
          If the total cart amount exceeds PKR 30,000, Leopard Courier charges
          an additional 1.5% Cash Handling Charges country-wide where ever they
          deliver. If the amount is below PKR 30,000, so no amount is charged.
          Moreover, if the threshold of PKR 30,000 is crossed, the payment must
          be made in advance by online payment methods such as Debit/Credit
          Card.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;During transit time, if the customer wants any changes (address,
          phone number, payment method) after order booking, the delivery time
          may slightly increase by 2 to 3 days. However, the shipment will
          arrive in the maximum lead time of 7 days. However, if the changes are
          required before the parcel dispatch, then the order will arrive in the
          regular lead time promised.
        </p>
        <p>&nbsp;</p>
        <p>
          In case of any tracking issue, the customer can go to (INSERT LEOPARD
          LINK) and check the update.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;Although we ensure standard quality packaging while shipping our
          products, in case of any major or minor damage, we don’t take any
          responsibility during transit if the product gets damaged.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;Our courier company will make sure to attempt thrice before
          marking your parcel as Delivery Failed; however, in case of no
          contact, refusal to accept &amp; wrong address, the parcel will be
          returned to the seller.&nbsp;&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;Tariff Charges are considered overnight. The table is as
          follows:
        </p>
        <p>
          &nbsp;- If the product weighs &lt;500 grams or equals, then the
          charges sum up to PKR 250
        </p>
        <p>
          - If the product weighs between 501 grams to 1kg or equal, then the
          charges sum up to PKR 300
        </p>
        <p>&nbsp;-For each additional KG, PKR 200 is charged.</p>
        <p>&nbsp;</p>
        <p>
          &nbsp;If the parcel is received in an open box condition, the customer
          is requested not to receive it clearly as per the policy of Leopard
          Courier. If the customer accepts the parcel Venture Games will not be
          responsible for getting the claim.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;Delivery charges across Karachi for packaging weighing upto 1kg
          are charged PKR 200 only. In case of additional KG, PKR 100 will be
          added.&nbsp;&nbsp;
        </p>
      </div>
    </>
  );
}
