import { MdOutlineCancel } from "react-icons/md";
import SearchDropDownMobile from "./SearchDropDownMobile";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchMobile({ setOpenSearch }) {
  const [searchResult, setSearchResult] = useState();
  const [results, setResults] = useState();

  function handleCloseSearch() {
    setOpenSearch(false);
  }

  async function getProducts() {
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Title: searchResult,
      },
    });
    // console.log(response.data);
    setResults(response.data);
  }

  useEffect(() => {
    try {
      getProducts();
    } catch (e) {
      console.error(e);
    }
  }, [searchResult]);

  return (
    <>
      <div className="hidden tablet:bg-black tablet:opacity-95 tablet:min-h-[200vh] tablet:max-h-[100%] tablet:w-[100%] tablet:z-[99999] tablet:grid tablet:justify-center tablet:fixed">
        <div
          onClick={() => handleCloseSearch()}
          className="flex absolute right-10 top-5 text-[#805712] text-[40px]"
        >
          <MdOutlineCancel />
        </div>
        <form className="h-[60px] w-[500px] mobile:w-[100%]] mobile:px-10 pt-[20%] opacity-100 bg-opacity-100">
          <input
            className="h-[60px] w-[500px] pl-2 placeholder:text-[20px] placeholder:text-[#a57a2f] placeholder:font-bold mobile:w-[100%] border-[4px] border-[#805712] rounded-lg bg-blackOpac opacity-100 z-[9999]"
            placeholder="Search Venturegames"
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          ></input>
          {searchResult && (
            <SearchDropDownMobile
              setOpenSearch={setOpenSearch}
              searchResults={results}
            />
          )}
        </form>
      </div>
    </>
  );
}
