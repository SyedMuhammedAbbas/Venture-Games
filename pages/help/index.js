import Link from "next/link";
import ProfileBar from "../../components/common/ProfileBar";
import { useState } from "react";

export default function Help() {
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
      <div className="bg-[#FFB636] text-[20px] text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] tablet:pt-[20%] tablet:px-5 snap-start">
        <div>
          <h1 className="text-[65px] underline">Help</h1>
          <br />
          <br />
          <ul className="flex flex-wrap justify-center gap-10">
            <Link href="/help/technicalIssues">
              <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
                <span>Technical Issues </span>
              </li>
            </Link>
            <Link href="/help/generalQuestions">
              <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
                <span>General Questions</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
