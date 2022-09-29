import ProfileBar from "../../components/common/ProfileBar";
import LoginPage from "../../components/login/LoginPage";

export default function Login() {
  return (
    <>
      <ProfileBar cartshow={false} />
      <LoginPage />
    </>
  );
}
