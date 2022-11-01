import Spiderman from "../../images/image 4.png";

export default function SearchDropDown({ searchResults }) {
  // const searchResult = [
  //   { images: Spiderman.src, title: "Spiderman-MilesMorales" },
  //   { images: Spiderman.src, title: "Spiderman-MilesMorales" },
  // ];
  return (
    <>
      <div className="bg-black absolute right-[12%] top-[100%] rounded-xl z-[9999] grid gap-2 w-[400px]">
          {searchResults.slice(0, 5).map((result) => {
            return (
              <div className="flex gap-5 bg-transparent border-b-[1px] p-5 border-blackOpac items-center ">
                <img className="w-20 h-20 bg-contain" src={result.Images[0]}></img>
                <div className="text-white text-[25px]">{result.Title}</div>
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
