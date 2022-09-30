import Profile from "../../images/profile-white.png";

export default function ClientsViewCard() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#1c1c1c] rounded-2xl px-2 w-[340px] pt-10 mobile1.1:m-auto mobile1.1:p-auto mobile:w-[340px]">
        <img
          className="flex justify-center m-auto w-44 object-cover bg-slate-500 rounded-full mb-10"
          src={Profile.src}
        />
        <div className="text-white  text-center mb-[15px] mobile:px-2">
          Experience The Rise Of Miles Morales As The New Hero Masters
          Incredible, Explosive New Powers To Become His Own Spider- <br />
          Man
        </div>
        <div className="flex justify-center m-auto border-t-8 w-[170px] border-[#FFB636] center pb-5"></div>
        <div className="text-white text-center pb-10 text-[20px]">
          Huzaifa John
        </div>
      </div>
    </>
  );
}
