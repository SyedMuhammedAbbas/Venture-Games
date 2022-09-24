import { useState } from "react";
import ProfileBar from "../../components/common/ProfileBar";
import SignupPage from "../../components/signup/SignupPage";

export default function Signup() {
  const [handleLogin, sethandleLogin] = useState(false);
  const [handleSignup, sethandleSignup] = useState(true);
  return (
    <>
      <ProfileBar
        signup={true}
        cart={false}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <SignupPage />
    </>
  );
}
