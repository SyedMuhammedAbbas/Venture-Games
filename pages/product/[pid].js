import Teen from "../../images/teenesbr.png";
import { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { BiError } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileBar from "../../components/common/ProfileBar";
import { AddToCart } from "../../features/counter/cartSlice";
import Link from "next/link";
import UnavailabeProduct from "../../images/unavailable.jpg";

// const router = useRouter();
// const { pid } = router.query;
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: {  } } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context) {
//   return {
//     // Passed to the page component as props
//     props: { product: {} },
//   };
// }
// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }

export default function Product() {
  console.log("productPage");
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);
  // const productGroup = id;
  console.log(router.pathname);
  //   const productGroup = id;
  const token = useSelector((state) => state.user.token);
  // console.log(productGroup);

  const [Products, setProducts] = useState([]);
  const [AvailablePlatforms, setAvailablePlatforms] = useState([]);
  const [AvailableColours, setAvailableColours] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedColour, setSelectedColour] = useState();
  const [particularItem, setParticularItem] = useState(true);

  const [New, setNew] = useState(true);
  const [Old, setOld] = useState(false);
  const [selectedPlatformFlag, setSelectedPlatformFlag] = useState(true);

  async function fetchData() {
    console.log("Fetch");
    // console.log(productGroup);
    let response = await axios.get("https://api.venturegames.pk/ProductGroup", {
      params: {
        Product: pid,
      },
    });
    setProducts(response.data);
    const initialProduct = response.data.find((item) => item._id === pid);
    setSelectedType(initialProduct.Type);
    setOld(initialProduct.Type === "Used");
    setNew(initialProduct.Type === "New");
    setSelectedPlatform(initialProduct.Platform.Title);
    if (initialProduct.Colour) {
      setSelectedColour(initialProduct.Colour.Title);
    }

    setAvailablePlatforms(initialProduct.ProductGroup.AvailablePlatforms);
    setAvailableColours(initialProduct.ProductGroup.AvailableColours);
    // setSelectedType(response.data[0].Type);
    // if (response.data[0].Type === "Used") {
    //   setOld(true);
    //   setNew(false);
    // } else {
    //   setOld(false);
    //   setNew(true);
    // }

    // if (response.data[0].Platform) {
    //   setSelectedPlatform(response.data[0].Platform.Title);
    // }
    // if (response.data[0].Colour) {
    //   setSelectedColour(response.data[0].Colour.Title);
    // }
    // setDisplayedProduct(Products[0]);
  }

  useLayoutEffect(() => {
    if (!router.isReady) return;
    console.log("hello");
    fetchData().then(() => {
      setInitialized(true);

      // setItems(true);
    });
  }, [router.query, router.isReady]);

  function getTitle(SelectedObject) {
    const selPlatform = SelectedObject.Title;
    setSelectedPlatform(selPlatform);
  }

  function getColour(selectedObject) {
    const colours = selectedObject.Title;
    setSelectedColour(colours);
  }

  // console.log(3);
  // console.log(Products);
  // console.log(selectedType);
  // console.log(selectedColour);
  // console.log(selectedPlatform);
  // console.log(4);
  // const [TypeFlag, setTypeFlag] = useState(false);

  let DisplayedProduct = Products.find((product) => {
    if (product.Type !== selectedType) {
      return false;
    }
    if (selectedPlatform) {
      if (!product.Platform || product.Platform.Title !== selectedPlatform) {
        return false;
      }
    }
    if (selectedColour) {
      if (!product.Colour || product.Colour.Title !== selectedColour) {
        return false;
      }
    }
    return true;
  });
  // if (DisplayedProduct !== undefined) {
  //   setItems(true);
  // } else {
  //   setItems(false);
  // }
  function handleNew() {
    {
      New ? setNew(true) & setOld(false) : setNew(true) & setOld(false);
      console.log("New");
      if (Products.length >= 1) {
        let type = Products.find((prod) => {
          return prod.Type === "New";
        });
        console.log(type);
        if (type !== undefined) {
          setSelectedType("New");
          setParticularItem(true);
        } else {
          setParticularItem(false);
        }
      } else {
        setParticularItem(false);
      }
    }
  }
  function handleOld() {
    {
      Old ? setOld(true) & setNew(false) : setOld(true) & setNew(false);
      console.log("Used");
      if (Products.length >= 1) {
        let type = Products.find((prod) => {
          return prod.Type === "Used";
        });
        console.log(type);
        if (type !== undefined) {
          setSelectedType("Used");
          setParticularItem(true);
        } else {
          setParticularItem(false);
        }
      } else {
        setParticularItem(false);
      }
    }
  }

  const dispatch = useDispatch();

  const handleAddtoCart = async (DisplayedProduct) => {
    if (token && DisplayedProduct.Quantity > 0) {
      dispatch(AddToCart(DisplayedProduct));
      const jwtToken = JSON.parse(localStorage.getItem("token"));
      let config = {
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
      };
      let response = await axios.post(
        "https://api.venturegames.pk/UpdateCart",
        {
          Quantity: 1,
          ProductId: DisplayedProduct._id,
        },
        config
      );
    } else if (DisplayedProduct.Quantity <= 0) {
      alert("Product Not available");
    } else {
      router.push("/login");
    }
  };

  console.log("Initialized: " + initialized);

  return (
    <>
      <ProfileBar cartshow={true} />
      {!initialized ? (
        <div>Loader</div>
      ) : !DisplayedProduct ? (
        <div className="bg-[#FFB636] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
          <div className="flex justify-center product">
            <img
              className="w-[550px] h-[550px] bg-[#606060] object-contain z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet:w-[330px] tablet:h-[330px] tablet2:justify-center"
              src={UnavailabeProduct.src}
            ></img>
            <div className="grid gap-0 h-[500px] xl:h-[400px] tablet:h-[500px] tablet3:h-[100%] mobile2:h-[650px] mobile1:h-[100%] ml-[-20px] tablet:ml-[-90px] mobile2:ml-[-200px] mobile1:ml-[-300px] mt-[1.5%] tablet:mt-[10%] mobile2:mt-[34%] mobile1:pt-[30%] bg-gradient-to-b from-[#000000] via-[#282828] to-[#000000] pl-[40px] w-[800px] tablet3:w-[500px] mobile1:w-[400px] rounded-tr-[45px] rounded-br-[45px] tablet:rounded-bl-[45px]">
              <div className="tablet:pl-[90px] mobile2:pl-10 mobile1:pl-0 tablet:py-10 mobile1:pt-20">
                <div className="relative  pt-[5%] tablet3:pt-[30%] tablet3:grid tablet3:gap-12 mobile2:gap-14 mobile1:gap-14 mobile1:pt-20">
                  <div className=" absolute right-8 top-[18px] xl:top-6">
                    <div className="flex gap-0 bg-[#FFB636] rounded-[40px] p-[1px] w-[224px] mobile:w-[217px]">
                      <button
                        className={`capitalize text-[20px] mobile:text-[12px] font-semibold py-1 px-10 ${
                          New
                            ? "bg-[#000] text-[#FFB636] rounded-[40px]"
                            : "bg-transparent text-[#000]"
                        }`}
                        value="new"
                        onClick={() => {
                          handleNew();
                        }}
                      >
                        new
                      </button>
                      <button
                        className={`capitalize ml-[-20px] text-[20px] mobile:text-[12px] font-semibold py-1 px-10 ${
                          Old
                            ? "bg-[#000] text-[#FFB636] rounded-[40px]"
                            : "bg-transparent text-[#000]"
                        }`}
                        value="old"
                        onClick={() => {
                          handleOld();
                        }}
                      >
                        used
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2 w-[300px] overflow-y-scroll desp-scroll">
                    <div className="text-white text-[35px] xl:text-[30px] tablet:text-[25px] mobile1:text-[25px] tablet:w-[250px] mobile1:w-[300px] font-semibold ">
                      {}
                    </div>
                    <div className="flex gap-1">
                      {AvailablePlatforms.map((index) => {
                        if (selectedPlatform === index.Title) {
                          return (
                            <button
                              onClick={() => {
                                getTitle(index);
                              }}
                              className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                selectedPlatformFlag
                                  ? "bg-[#FFB636] text-black"
                                  : "text-[#FFB636] bg-transparent"
                              }`}
                            >
                              {index.Title}
                            </button>
                          );
                        } else {
                          return (
                            <button
                              onClick={() => {
                                getTitle(index);
                              }}
                              className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                selectedPlatformFlag
                                  ? "text-[#FFB636] bg-transparent"
                                  : " bg-[#FFB636] text-black"
                              }`}
                            >
                              {index.Title}
                            </button>
                          );
                        }
                      })}
                    </div>
                    <div className="flex gap-1">
                      {AvailableColours.map((index) => {
                        if (selectedColour === index.Title) {
                          return (
                            <div className="flex gap-1">
                              <button
                                onClick={() => {
                                  getColour(index);
                                }}
                                className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                  selectedPlatformFlag
                                    ? "bg-[#FFB636] text-black"
                                    : "text-[#FFB636] bg-transparent"
                                }`}
                              >
                                {index.Title}
                              </button>
                              <button
                                className={`rounded-full w-5 border border-black 
                                    bg-[#${index.Code.replace(/['"]+/g, "")}]
                                  `}
                              >
                                {" "}
                              </button>
                            </div>
                          );
                        } else {
                          return (
                            <div className="flex gap-1">
                              <button
                                onClick={() => {
                                  getColour(index);
                                }}
                                className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                  selectedPlatformFlag
                                    ? "text-[#FFB636] bg-transparent"
                                    : " bg-[#FFB636] text-black"
                                }`}
                              >
                                {index.Title}
                              </button>
                              <button
                                className={`rounded-full w-5 border border-black 
                                bg-[#${index.Code.replace(/['"]+/g, "")}]
                              `}
                              >
                                {" "}
                              </button>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>

                <div className="  text-blackOpac mt-2 pb-5 text-[5vw] flex justify-center items-center">
                  Product Unavailable
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#FFB636] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
          <div className="flex justify-center product">
            <img
              className="w-[550px] h-[550px] bg-[#606060] object-contain z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet:w-[330px] tablet:h-[330px] tablet2:justify-center"
              src={DisplayedProduct.Images}
            ></img>
            <div className="grid gap-0 h-[500px] xl:h-[400px] tablet:h-[500px] tablet3:h-[100%] mobile2:h-[650px] mobile1:h-[100%] ml-[-20px] tablet:ml-[-90px] mobile2:ml-[-200px] mobile1:ml-[-300px] mt-[1.5%] tablet:mt-[10%] mobile2:mt-[34%] mobile1:pt-[30%] bg-gradient-to-b from-[#000000] via-[#282828] to-[#000000] pl-[40px] w-[800px] tablet3:w-[500px] mobile1:w-[400px] rounded-tr-[45px] rounded-br-[45px] tablet:rounded-bl-[45px]">
              <div className="tablet:pl-[90px] mobile2:pl-10 mobile1:pl-0 tablet:py-10 mobile1:pt-20">
                <div className="relative  pt-[5%] tablet3:pt-[30%] tablet3:grid tablet3:gap-12 mobile2:gap-14 mobile1:gap-14 mobile1:pt-20">
                  <div className=" absolute right-8 top-[18px] xl:top-6">
                    <div className="flex gap-0 bg-[#FFB636] rounded-[40px] p-[1px] w-[224px] mobile:w-[217px]">
                      <button
                        className={`capitalize text-[20px] mobile:text-[12px] font-semibold py-1 px-10 ${
                          New
                            ? "bg-[#000] text-[#FFB636] rounded-[40px]"
                            : "bg-transparent text-[#000]"
                        }`}
                        value="new"
                        onClick={() => {
                          handleNew();
                        }}
                      >
                        new
                      </button>
                      <button
                        className={`capitalize ml-[-20px] text-[20px] mobile:text-[12px] font-semibold py-1 px-10 ${
                          Old
                            ? "bg-[#000] text-[#FFB636] rounded-[40px]"
                            : "bg-transparent text-[#000]"
                        }`}
                        value="old"
                        onClick={() => {
                          handleOld();
                        }}
                      >
                        used
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2 w-[300px] overflow-y-scroll desp-scroll">
                    <div className="text-white text-[35px] xl:text-[30px] tablet:text-[25px] mobile1:text-[25px] tablet:w-[250px] mobile1:w-[300px] font-semibold ">
                      {DisplayedProduct.Title}
                    </div>
                    <div className="flex gap-1">
                      {AvailablePlatforms.map((index) => {
                        if (selectedPlatform === index.Title) {
                          return (
                            <button
                              onClick={() => {
                                getTitle(index);
                              }}
                              className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                selectedPlatformFlag
                                  ? "bg-[#FFB636] text-black"
                                  : "text-[#FFB636] bg-transparent"
                              }`}
                            >
                              {index.Title}
                            </button>
                          );
                        } else {
                          return (
                            <button
                              onClick={() => {
                                getTitle(index);
                              }}
                              className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                selectedPlatformFlag
                                  ? "text-[#FFB636] bg-transparent"
                                  : " bg-[#FFB636] text-black"
                              }`}
                            >
                              {index.Title}
                            </button>
                          );
                        }
                      })}
                    </div>
                    <div className="flex gap-1">
                      {AvailableColours.map((index) => {
                        if (selectedColour === index.Title) {
                          return (
                            <div className="flex gap-1">
                              <button
                                onClick={() => {
                                  getColour(index);
                                }}
                                className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                  selectedPlatformFlag
                                    ? "bg-[#FFB636] text-black"
                                    : "text-[#FFB636] bg-transparent"
                                }`}
                              >
                                {index.Title}
                              </button>
                              <button
                                className={`rounded-full w-5 border border-black 
                                    bg-[#${index.Code.replace(/['"]+/g, "")}]
                                  `}
                              >
                                {" "}
                              </button>
                            </div>
                          );
                        } else {
                          return (
                            <div className="flex gap-1">
                              <button
                                onClick={() => {
                                  getColour(index);
                                }}
                                className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                  selectedPlatformFlag
                                    ? "text-[#FFB636] bg-transparent"
                                    : " bg-[#FFB636] text-black"
                                }`}
                              >
                                {index.Title}
                              </button>
                              <button
                                className={`rounded-full w-5 border border-black 
                                bg-[#${index.Code.replace(/['"]+/g, "")}]
                              `}
                              >
                                {" "}
                              </button>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="overflow-y-scroll desp-scroll h-[50px] w-[350px] mt-1 xl:h-[80px] tablet:h-[120px] tablet3:w-[300px] mobile1:pt-2">
                  <div className="grid">
                    <div className="grid gap-[1px] mobile1:gap-0">
                      <div className="flex">
                        {Object.values(DisplayedProduct.Genre).map((i) => (
                          <div
                            key={i}
                            className="text-gray-400 text-[25px] mobile1:text-[20px] capitalize"
                          >
                            {i.Title}{" "}
                            <span className="text-[40px] mobile1:text-[20px]">
                              .{" "}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-b-[2px] border-gray-400 w-[250px]"></div>
                    </div>

                    <div className="text-gray-400 text-[25px] mobile1:text-[20px] mobile1:pt-[-20px]">
                      {Object.values(DisplayedProduct.Tags).map((i) => {
                        if (typeof i.Title === "string") {
                          return i.Title;
                        }
                      })}{" "}
                      {Object.values(DisplayedProduct.Tags).map((i) => {
                        if (typeof i.Title === "string") {
                          return <span className="text-[40px]">.</span>;
                        } else {
                          return " ";
                        }
                      })}
                      {""}
                      {Object.values(DisplayedProduct.Tags).map((i) => {
                        if (typeof i.Title !== "string") {
                          return i.Title;
                        }
                      })}{" "}
                    </div>
                  </div>
                </div>
                <div className="overflow-y-scroll desp-scroll h-[90px] w-[350px] text-white mt-2 pb-5 text-[20px]">
                  {DisplayedProduct.Description}
                </div>

                <div className="flex gap-5 border-y-2 border-gray-600 w-[250px] mobile1:w-[300px] pt-1 mt-2 xl:mt-5 mb-5">
                  {DisplayedProduct.OldPrice === undefined ? (
                    ""
                  ) : (
                    <div className="flex gap-4">
                      <div className="text-red-600 line-through text-[23px] mobile1:text-[20px]">
                        {DisplayedProduct.OldPrice}
                      </div>
                      <div className="border-r-2 border-gray-600 h-5 mt-2"></div>
                    </div>
                  )}

                  <div className="text-white text-[25px] mobile1:text-[20px]">
                    {DisplayedProduct.Price} PKR
                  </div>
                </div>

                <div className="tablet:pb-[0px] tablet3:grid tablet3:gap-10">
                  {particularItem === false ? (
                    <div className="text-[#7a7a7a] text-[25px] mobile:text-[20px]">
                      Product Unavailable
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      {token ? (
                        <Link href="/cart">
                          <button
                            onClick={() => handleAddtoCart(DisplayedProduct)}
                            className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black cursor-pointer"
                          >
                            Buy Now
                          </button>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleAddtoCart(DisplayedProduct)}
                          className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black cursor-pointer"
                        >
                          Buy Now
                        </button>
                      )}
                      <button
                        onClick={() => handleAddtoCart(DisplayedProduct)}
                        className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black "
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}

                  <div className="relative pl-[85%] mt-[-90px] bottom-[40px] tablet:bottom-[0px] tablet3:mt-0 tablet3:bottom-4 tablet3:pl-[75%]">
                    <img
                      className="w-[70px] tablet3:w-[50px]"
                      src={Teen.src}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
