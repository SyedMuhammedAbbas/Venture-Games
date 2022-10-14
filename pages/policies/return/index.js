import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";

export default function ReturnPolicies() {
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
        <p>
          <strong>
            <span style={{ textDecoration: "underline" }}>Return Policy:</span>
          </strong>
        </p>
        <p>
          In case of a return, the request can be processed for the product
          within 3 days. In case of a technical issue in the product, our team
          will coordinate with the concerned customer and help him online. The
          return will not be applicable if the problem is sorted out via call or
          online help.
        </p>
        <p>
          &nbsp;However, if the issue persists in any gaming part, such as CD,
          and the same product is available, then the exchange will be
          processed. However, in case of non-availability, the amount will be
          refunded. If you want to return Your item must be unused and in the
          same condition that you received it. It must also be in the original
          packaging and sellable condition.
        </p>
      </div>
    </>
  );
}
