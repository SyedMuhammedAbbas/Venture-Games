import Spiderman from "../../images/image 4.png";
import Link from "next/link";

function saveData(data) {
  //console.log(data);
  data = '{"pid" :"' + data + '"}';
  console.log(data);
  console.log(JSON.parse(data));
  window.localStorage.setItem("pid", data);
}

export default function SearchDropDown({ searchResults, setSearchResult, result }) {
  console.log(result);
  function handleClose() {
    setSearchResult("");
  }
  return (
    <>
      <div className="bg-black absolute right-[0%] top-14 rounded-xl z-[9999] grid gap-2 w-[500px]">
        {searchResults.slice(0, 5).map((result) => {
          return (
            <Link href="/product/[pid]" as={`/product/${result._id}`}>
              <div
                onClick={() => handleClose() & saveData(result._id)}
                className="flex gap-5 bg-transparent hover:cursor-pointer border-b-[1px] p-5 border-blackOpac items-center "
              >
                <img
                  className="w-20 h-20 bg-contain"
                  src={result.Images[0]}
                ></img>
                <div className="text-white text-[25px]">{result.Title}</div>
              </div>
            </Link>
          );
        })}
        <Link href="/search/[pid]" as={`/search/${result}`}>
        <button className="text-white text-[25px] p-2 hover:text-[#FFB636] text-center">
          View all
        </button>
        </Link>
      </div>
    </>
  );
}
