import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";

export default function PaymentPolicies() {
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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] max-h-[100%] tablet:pt-[20%] tablet:px-10">
        <ul className="flex flex-wrap justify-center gap-10">
          <Link href="/policies/privacy">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Privacy policy</span>
            </li>
          </Link>
          <Link href="/policies/shipping">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Shipping policy</span>
            </li>
          </Link>
          <Link href="/policies/payment">
            <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
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
            <span style={{ textDecoration: "underline" }}>Payment </span>
          </strong>
          <strong>
            <span style={{ textDecoration: "underline" }}>Policy:</span>
          </strong>
        </p>
        <p>
          <strong>
            <span style={{ textDecoration: "underline" }}>
              *FOR SALE OF USED CONSOLES &amp; ACCESSORIES*
            </span>
          </strong>
        </p>
        <p>&nbsp;</p>
        <p>
          The method below will be followed if you live outside Karachi and want
          to sell your console or gaming accessories.
        </p>
        <p>&nbsp;</p>
        <p>
          When your package arrives, our Quality Team will thoroughly analyze
          it. If the console or accessory meets our requirements, we'll transfer
          the payment the next day; otherwise, we'll return the package to your
          postal address.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>&nbsp;</strong>The steps below will be followed if you live in
          Karachi and want to sell your console or gaming accessories.
        </p>
        <p>&nbsp;</p>
        <p>
          - You can physically visit our store at the above address or send a
          package to us.
        </p>
        <p>
          Our Quality Team will thoroughly evaluate the console or accessory
          after receiving your package. If it meets our requirements, we'll
          transfer the payment the same day; otherwise, we'll return the package
          to your postal address.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;
          <strong>
            <span style={{ textDecoration: "underline" }}>
              *FOR PURCHASE OF USED/NEW CONSOLES &amp; ACCESSORIES*
            </span>
          </strong>
        </p>
        <p>
          <strong>&nbsp;</strong>
        </p>
        <p>
          If you are located outside Karachi &amp; wish to purchase a new
          console or gaming accessory, then the following procedure will be
          followed:
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;- If you wish to purchase by Cash on Delivery, select this
          option. You will be shared a tracking number from Leopards Courier,
          which will update you about the status.
        </p>
        <p>
          &nbsp;- In case of online payment, you can pay by Debit/Credit Card
          and share the proof of payment with us as a screenshot.&nbsp;
        </p>
        <p>
          -To book your order, you can transfer the amount via bank transfer,
          easy paisa, or jazz cash
        </p>
        <p>
          - Send the screenshot of the payment to our official numbers, and once
          the amount is credited, we will dispatch the parcel after the
          confirmation.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>&nbsp;</strong>If you are located in Karachi &amp; wish to
          purchase a new console or gaming accessory, then the following
          procedure will be followed.
        </p>
        <p>
          &nbsp;- You can visit our physical shop at the mentioned address and
          pay there.
        </p>
        <p>
          - Cash On Delivery Service is available in Karachi along with the
          prepayment procedure. (JazzCash, Easypaisa, Debit/Credit Card, or bank
          transfer) mentioned above.
        </p>
      </div>
    </>
  );
}
