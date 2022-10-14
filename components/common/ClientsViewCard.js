import Profile from "../../images/profile-white.png";

export default function ClientsViewCard({ client }) {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#1c1c1c] rounded-2xl px-2 w-[340px] pt-10 mobile1.1:m-auto mobile1.1:p-auto mobile:w-[340px]">
        <img
          className="flex justify-center m-auto w-44 h-44 object-contain bg-slate-500 rounded-full mb-10"
          src={client.Images}
        />
        <div className="text-white text-[20px] mobile:text-[15px] text-center mb-[15px] h-[90px] desp-scroll overflow-y-scroll mobile:px-2">
          {client.Description}
        </div>
        <div className="flex justify-center m-auto border-t-8 w-[170px] border-[#FFB636] center pb-5"></div>
        <div className="text-white text-center pb-10 text-[20px]">
          {client.Name}
        </div>
      </div>
    </>
  );
}
