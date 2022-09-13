import Profile from "../images/profile-white.png";

export default function ClientsView() {
  const n = 3;
  return (
    <div className="bg-[#FFB636] p-32 tablet:pt-20 4xl:px-20 3xl:px-14 2xl:px-10 xl:px-5 mobile1.1:px-2">
      <div className="bg-gradient-to-r from-black via-stone-700 to-black pt-10 shadow-lg shadow-gray-800">
        <div className="block">
          <div className="font-hemi text-white text-[80px] 3xl:text-[7vw] mobile:text-[40px] mobile1.1:text-[35px] mobilesm:text-[27px] text-center">
            What C
            <span className="justify-center border-y-8  border-[#FFB636]">
              lient
            </span>
            s Say
          </div>
          <div className="text-white px-10 text-[30px] mobile:text-[20px] tablet:pb-10 tablet:pt-10 text-center">
            We At Venture Games hjfsfnsjk fdkjsfns jkkfhsi jhsifjs nfjsk djadd
            ndja dnajkda djkad dabkjdbaw dnajk dnajkda
          </div>
        </div>

        <div className="flex flex-wrap m-[50px] lg:m-10 gap-20 justify-center pb-[50px]">
          {[...Array(n)].map((user) => (
            <div
              key={user}
              className="bg-gradient-to-r from-black to-[#1c1c1c] rounded-2xl w-[340px] pt-10 mobile1.1:m-auto mobile1.1:p-auto mobile:w-[340px]"
            >
              <img
                className="flex justify-center m-auto w-44 object-cover bg-slate-500 rounded-full mb-10"
                src={Profile.src}
              />
              <div className="text-white  text-center mb-[15px] mobile:px-2">
                Experience The Rise Of Miles Morales As The New Hero Masters
                Incredible, Explosive New Powers To Become His Own Spider-{" "}
                <br />
                Man
              </div>
              <div className="flex justify-center m-auto border-t-8 w-[170px] border-[#FFB636] center pb-5"></div>
              <div className="text-white text-center pb-10 text-[20px]">
                Huzaifa John
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
