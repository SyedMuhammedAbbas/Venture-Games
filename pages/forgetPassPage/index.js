import ForgetPass from "../../components/login/ForgetPass";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function ForgetPassPage() {
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
      <div className="snap-center">
        <ForgetPass />
      </div>
    </>
  );
}
