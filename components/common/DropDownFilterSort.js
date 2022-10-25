export default function DropDownFilterSort() {
  return (
    <>
      <div className="grid w-60  top-[60px] bg-gradient-to-t from-black to-[#2c2c2c] opacity-95 absolute backdrop-blur-[20px] rounded-2xl p-[0rem] overflow-hidden">
        {handleFilter && (
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
        )}
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
      </div>
    </>
  );
}
