import PlatformsElement from "../../components/PlatformsElement";
import ProfileBar from "../../components/ProfileBar";

export default function Consoles() {
  return (
    <>
      <ProfileBar />
      <PlatformsElement consoles={true} />
    </>
  );
}
