import Spiderman from "../../images/image 4.png";

export default function SearchDropDown({ searchResults }) {
  // const searchResult = [
  //   { images: Spiderman.src, title: "Spiderman-MilesMorales" },
  //   { images: Spiderman.src, title: "Spiderman-MilesMorales" },
  // ];
  return (
    <>
      <div className="bg-black fixed rounded-xl z-[99999] grid gap-2 w-[500px] mobile:w-[100%]">
        {Object.values(searchResults)
          .slice(0, 5)
          .map((i) => {
            return (
              <div className="flex gap-5 bg-transparent border-b-[1px] p-5 border-blackOpac items-center ">
                <img className="w-20 h-20 bg-contain" src={i.Images[0]}></img>
                <div className="text-white text-[25px]">{i.Title}</div>
              </div>
            );
          })}
        <button className="text-white text-[25px] p-2 hover:text-[#FFB636] text-center">
          View all
        </button>
      </div>
    </>
  );
}
