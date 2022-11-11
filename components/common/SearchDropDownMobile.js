import Spiderman from "../../images/image 4.png";
import Link from "next/link";

function saveData(data) {
  //console.log(data);
  data = '{"pid" :"' + data + '"}';
  console.log(data);
  console.log(JSON.parse(data));
  window.localStorage.setItem("pid", data);
}

export default function SearchDropDown({ searchResults, setOpenSearch }) {
  // const searchResult = [
  //   { images: Spiderman.src, title: "Spiderman-MilesMorales" },
  //   { images: Spiderman.src, title: "Spiderman-MilesMorales" },
  // ];
  function handleClose() {
    setOpenSearch(false);
  }
  return (
    <>
      <div className="bg-black fixed rounded-xl z-[99999] grid gap-2 w-[500px] mobile:w-[400px] mobile1:w-auto mobile:px-auto mobile:pr-[4%] mobile:justify-center">
        {Object.values(searchResults)
          .slice(0, 5)
          .map((i) => {
            return (
              <Link href="/product/[pid]" as={`/product/${i._id}`}>
                <div
                  onClick={() => handleClose() & saveData(result._id)}
                  className="flex gap-5 bg-transparent hover:cursor-pointer border-b-[1px] p-5 border-blackOpac items-center "
                >
                  <img className="w-20 h-20 bg-contain" src={i.Images[0]}></img>
                  <div className="text-white text-[25px]">{i.Title}</div>
                </div>
              </Link>
            );
          })}
        <button className="text-white text-[25px] p-2 hover:text-[#FFB636] text-center">
          View all
        </button>
      </div>
    </>
  );
}
