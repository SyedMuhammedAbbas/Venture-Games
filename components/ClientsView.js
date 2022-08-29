import Profile from "../images/profile-white.png"

export default function ClientsView(){
    return(
        <div className="bg-[#FFB636] p-32 2xl:p-10">
            <div className="bg-gradient-to-r from-black via-stone-700 to-black pt-10 shadow-lg shadow-gray-800">
                <div className="block">
                    <div className="flex justify-center m-auto ml-[750px] border-t-8 w-[170px] border-[#FFB636]"></div>
                    <div className="font-hemi text-white text-[80px] text-center">What Clients Say</div>
                    <div className="flex justify-center m-auto ml-[750px] border-t-8 w-[170px] border-[#FFB636] center pb-10"></div>
                    <div className="text-white text-[30px] text-center">We At Venture Games hjfsfnsjk fdkjsfns jkkfhsi jhsifjs nfjsk<br/>djadd ndja dnajkda djkad dabkjdbaw dnajk dnajkda</div>
                </div>

                <div className="flex m-[50px] gap-20 justify-center pb-[50px]">
                    <div className="bg-gradient-to-r from-black to-[#1c1c1c] rounded-2xl w-[340px] pt-10">
                        <img className="flex justify-center m-auto w-44 object-cover bg-slate-500 rounded-full mb-10" src={Profile.src}/>
                        <div className="text-white  text-center mb-[15px]">Experience The Rise Of Miles Morales As <br/>The New Hero Masters Incredible, Explosive <br/>New Powers To Become His Own Spider- <br/>Man</div>
                        <div className="flex justify-center m-auto border-t-8 w-[170px] border-[#FFB636] center pb-5"></div>
                        <div className="text-white text-center pb-10 text-[20px]">Huzaifa John</div>
                    </div>
                    <div className="bg-gradient-to-r from-black to-[#1c1c1c] rounded-2xl w-[340px] pt-10">
                        <img className="flex justify-center m-auto w-44 object-cover bg-slate-500 rounded-full mb-10" src={Profile.src}/>
                        <div className="text-white  text-center mb-[15px]">Experience The Rise Of Miles Morales As <br/>The New Hero Masters Incredible, Explosive <br/>New Powers To Become His Own Spider- <br/>Man</div>
                        <div className="flex justify-center m-auto border-t-8 w-[170px] border-[#FFB636] center pb-5"></div>
                        <div className="text-white text-center pb-10 text-[20px]">Huzaifa John</div>
                    </div>
                    <div className="bg-gradient-to-r from-black to-[#1c1c1c] rounded-2xl w-[340px] pt-10">
                        <img className="flex justify-center m-auto w-44 object-cover bg-slate-500 rounded-full mb-10" src={Profile.src}/>
                        <div className="text-white  text-center mb-[15px]">Experience The Rise Of Miles Morales As <br/>The New Hero Masters Incredible, Explosive <br/>New Powers To Become His Own Spider- <br/>Man</div>
                        <div className="flex justify-center m-auto border-t-8 w-[170px] border-[#FFB636] center pb-5"></div>
                        <div className="text-white text-center pb-10 text-[20px]">Huzaifa John</div>
                    </div>
                </div>
            </div>
        </div>
    )
}