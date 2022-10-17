import { useState, useEffect } from "react";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import FeaturedCard from "../home/FeaturedCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterByConsole,
  FilterByGenre,
  getGames,
  SortLowToHigh,
  SortHighToLow,
  FilterByCategory,
} from "../../features/counter/gamesSlice";

export default function ShopGames({ handleFilter, handleSort }) {
  console.log("here");
  const Products = useSelector((state) => state.games.allGames);
  console.log(Products);
  const [platforms, setPlatforms] = useState([]);
  const [genre, setGenre] = useState([]);
  const [tags, setTags] = useState([]);
  const sortbyprice = ["Low to High", "High to Low"];
  const icons = "text-[35px] 2xl:text-[25px] lg:text-[21px] text-white";
  const buttons =
    "text-white uppercase border-[1px] font-semibold border-white rounded-lg text-[25px] px-2 w-48 py-1 hover:bg-white hover:text-black hover:border-black focus:bg-white focus:text-black focus:border-black";

  // const platforms = ["PS5", "PS4", "XBOX"];
  // const genre = ["Action", "adventure", "thriller", "Driving/Racing"];
  // const category = ["online", "offline"];

  async function setters() {
    let plats = await axios.get("https://api.venturegames.pk/GetPlatforms");
    setPlatforms(plats.data);
    let gens = await axios.get("https://api.venturegames.pk/GetGenres");
    setGenre(gens.data);
    let tag = await axios.get("https://api.venturegames.pk/GetTags");
    setTags(tag.data);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
    setters();
  }, []);

  const item = Products.map((index) => {
    return index.ProductGroup;
  });
  // console.log(item);
  function FilterConsole(Products) {
    dispatch(FilterByConsole(Products));
  }
  function FilterGenre(Products) {
    dispatch(FilterByGenre(Products));
  }

  async function sortByPlatform(type) {
    let selectedPlat = platforms.find((index) => {
      return index.Title == type.Title;
    });
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Platform: selectedPlat._id,
        ProductCategory: "Games",
      },
    });
    console.log(response.data);
    if (response.data.length > 0) {
      dispatch(FilterByGenre(response.data));
    } else {
      alert("No Product");
    }
  }

  async function sortByTags(tag) {
    let selectedTag = tags.find((index) => {
      return index.Title == tag.Title;
    });
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Tag: selectedTag._id,
        ProductCategory: "Games",
      },
    });
    console.log(response.data);
    if (response.data.length > 0) {
      dispatch(FilterByCategory(response.data));
    } else {
      alert("No Product");
    }
  }

  async function sortByGenre(gen) {
    let selectedGen = genre.find((index) => {
      return index.Title == gen.Title;
    });
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Genre: selectedGen._id,
        ProductCategory: "Games",
      },
    });
    console.log(response.data);
    if (response.data.length > 0) {
      dispatch(FilterByConsole(response.data));
    } else {
      alert("No Product");
    }
  }

  async function sortLowHigh() {
    // e.preventDefault();
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Sort: "PriceDesc",
        ProductCategory: "Games",
      },
    });
    console.log(response.data);
    dispatch(SortLowToHigh(response.data));
  }

  async function sortHighLow() {
    // e.preventDefault();
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Sort: "PriceAsc",
        ProductCategory: "Games",
      },
    });
    console.log(response.data);
    dispatch(SortHighToLow(response.data));
  }
  // console.log(Products);
  return (
    <div className="bg-[#FFB636] ">
      {Products && (
        <div className="bg-[url('../images/background.png')] bg-[length:1700px_1800px] bg-no-repeat bg-[left_15vw_top_0rem]">
          <div className="flex pt-[10%] pb-[5%]">
            {/* {handleFilter && ( */}
            <div
              className={
                handleFilter
                  ? "bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] transition duration-300 ease-in-out opacity-100 px-[60px] mt-[0%] tablet:hidden h-[1300px] rounded-tr-[70px] rounded-br-[70px]"
                  : "hidden"
              }
            >
              <div className="flex gap-4 justify-center my-7">
                <div className={icons}>
                  <BsSliders />
                </div>
                <div className="text-[35px] text-white mt-[-7px] lg:mt-[-5px]">
                  Filter
                </div>
              </div>

              <div className="border-t-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {platforms.map((type, index) => (
                    <button
                      value={type}
                      key={index}
                      className={buttons}
                      onClick={() => {
                        sortByPlatform(type);
                      }}
                    >
                      {type.Title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-y-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {genre.map((genre, i) => (
                    <button
                      value={genre}
                      key={i}
                      className={buttons}
                      onClick={() => {
                        sortByGenre(genre);
                      }}
                    >
                      {genre.Title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-b-[3px] border-blackOpac">
                <div className="grid items-start gap-4 mr-[120px] py-10">
                  {tags.map((category, ind) => (
                    <button
                      value={category}
                      key={ind}
                      className={buttons}
                      onClick={() => {
                        sortByTags(category);
                      }}
                    >
                      {category.Title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* )} */}

            {handleSort && (
              <div
                className={` bg-gradient-to-tr from-[#b68228] via-black to-[#c28d33] transition duration-300 ease-in-out px-[60px] mt-[0%] tablet:hidden h-[1300px] rounded-tr-[70px] rounded-br-[70px]`}
              >
                <div className="flex gap-4 justify-center my-7">
                  <div className={icons}>
                    <BsSortDown />
                  </div>
                  <div className="text-[35px] text-white mt-[-7px] lg:mt-[-5px]">
                    Sort
                  </div>
                </div>

                <div className="border-t-[3px] border-blackOpac">
                  <div className="grid items-start gap-4 mr-[120px] py-10">
                    {sortbyprice.map((sortbyprice, index) => (
                      <button
                        value={sortbyprice}
                        key={index}
                        className={buttons}
                        onClick={() => {
                          if (sortbyprice == "Low to High") {
                            sortHighLow();
                          } else {
                            sortLowHigh();
                          }
                        }}
                      >
                        {sortbyprice}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-wrap justify-center mx-auto gap-5 text-center mb-[5%]">
              {Object.values(Products).map((currentItem) => (
                <FeaturedCard key={currentItem} product={currentItem} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
