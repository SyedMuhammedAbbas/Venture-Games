import PlatformsElement from "../../components/common/PlatformsElement";
import ProfileBar from "../../components/common/ProfileBar";

export default function Consoles() {
  return (
    <>
      <ProfileBar />
      <PlatformsElement consoles={true} />
    </>
  );
}
