import ProfileBar from "../../components/common/ProfileBar";
import SignupPage from "../../components/signup/SignupPage";

export default function Signup() {
  return (
    <>
      <ProfileBar cartshow={false} />
      <div className="snap-center">
        <SignupPage />
      </div>
    </>
  );
}
