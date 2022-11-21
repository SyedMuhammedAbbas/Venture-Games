import Cover from "../../images/GamesCover.jpg";

export default function GamesCover() {
  return (
    <div className="bg-[url('../images/GamesCover.jpg')] bg-center min-w-screen max-w-[100%] bg-cover bg-no-repeat min-h-[200vh] max-h-[100%]  tablet:bg-cover mx-auto block tablet:bg-[url('../images/GamesCoverMobile.jpg')] "></div>
  );
}
