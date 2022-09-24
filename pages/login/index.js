import { useState } from "react";
import ProfileBar from "../../components/common/ProfileBar";
import LoginPage from "../../components/login/LoginPage";

export default function Login() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(true);
  return (
    <>
      <ProfileBar
        cart={false}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
      />
      <LoginPage />
    </>
  );
}
