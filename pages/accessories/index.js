import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function Accessories() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  return (
    <>
      <ProfileBar
        cart={false}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <div>Hello World</div>
    </>
  );
}
