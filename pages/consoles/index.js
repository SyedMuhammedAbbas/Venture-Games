import ConsolesPlatform from "../../components/common/ConsolesPlatform";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function Consoles() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <ProfileBar
        cartshow={false}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <div className="snap-start">
        <ConsolesPlatform />
      </div>
    </>
  );
}
