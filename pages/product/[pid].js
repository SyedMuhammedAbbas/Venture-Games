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
import Logo from "../../images/logo.svg";
import { setCartItem } from "../../features/counter/cartSlice";
import { data } from "autoprefixer";

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

export async function getStaticProps(context) {
  console.log(context.params);
  const { pid } = context.params;
  let response = await axios.get("https://api.doggel.co.uk/ProductGroup", {
    params: {
      Product: pid,
    },
  });
  return {
    props: {
      data: response.data,
    },
  };
}

export async function getStaticPaths() {
  let response = await axios.get("https://api.doggel.co.uk/Products");
  console.log(response);
  const ids = response.data.map((product) => product._id);
  const paths = ids.map((id) => ({ params: { pid: id.toString() } }));

  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  };
}

// export async function getServerSideProps(context) {
//   const { pid } = context.params;
//   console.log(pid);
//   if (pid) {
//     let response = await axios.get("https://api.doggel.co.uk/ProductGroup", {
//       params: {
//         Product: pid,
//       },
//     });
//     return {
//       props: { data: response.data },
//     };
//   }
// }

export default function Product({ data }) {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  // console.log("productPage");
  const router = useRouter();
  const { pid } = router.query;
  // console.log(pid);
  // const productGroup = id;
  // console.log(router.pathname);
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
    // console.log("Fetch");
    // console.log(productGroup);
    let response = await axios.get("https://api.doggel.co.uk/ProductGroup", {
      params: {
        Product: pid,
      },
    });
    setProducts(data);
    const initialProduct = data.find((item) => item._id === pid);
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
    // console.log("hello");
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
  // let previousDisplayedProduct = DisplayedProduct;
  let isAvailable = true;
  if (!DisplayedProduct) {
    DisplayedProduct = Products[0];
    isAvailable = false;
  }
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
        setSelectedType("New");
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
        setSelectedType("Used");
      }
    }
  }

  const dispatch = useDispatch();

  async function getCart() {
    let jwtToken = JSON.parse(localStorage.getItem("token"));
    console.log(jwtToken);
    let config = {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    };
    let response = await axios.get("https://api.doggel.co.uk/GetCart", config);
    // console.log("Here");
    dispatch(setCartItem(response.data));
  }

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
        "https://api.doggel.co.uk/UpdateCart",
        {
          Quantity: 1,
          ProductId: DisplayedProduct._id,
        },
        config
      );

      getCart();

      console.log(response);
    } else if (DisplayedProduct.Quantity <= 0) {
      alert("Product Not available");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <ProfileBar
        cartshow={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      {!initialized ? (
        <div className="bg-[#1A1A1A] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
          <img src={Logo.src} className="w-20 h-20 animate-spin" />
        </div>
      ) : (
        <div className="bg-[#1A1A1A] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
          <div className="flex justify-center product py-[4%]">
            {!isAvailable ? (
              <img
                className="w-[550px] h-[550px] bg-[#606060] object-contain z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet:w-[330px] tablet:h-[330px] tablet2:justify-center"
                src={UnavailabeProduct.src}
              ></img>
            ) : (
              <img
                className="w-[550px] h-[550px] bg-[#606060] object-contain z-50 rounded-3xl xl:w-[450px] xl:h-[450px] lg:w-[400px] lg:h-[400px] tablet:w-[330px] tablet:h-[330px] tablet2:justify-center"
                src={DisplayedProduct.Images}
              ></img>
            )}
            <div className="grid gap-0 min-h-[500px] max-h-[100%] relative xl:min-h-[400px] xl:max-h-[100%] tablet:min-h-[500px] tablet:max-h-[100%] tablet3:h-[100%] mobile2:min-h-[650px] mobile2:max-h-[100%] mobile1:h-[100%] ml-[-20px] tablet:ml-[-90px] mobile2:ml-[-200px] mobile1:ml-[-300px] mt-[10%] xl:mt-[5%] tablet:mt-[10%] mobile2:mt-[34%] mobile1:pt-[30%] bg-gradient-to-b from-[#000000] via-[#282828] to-[#000000] pl-[40px] w-[800px] tablet3:w-[500px] mobile1:w-[400px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[45px] xl:rounded-bl-[45px] tablet:rounded-bl-[45px]">
              <div className="tablet:pl-[90px] relative mobile2:pl-10 mobile1:pl-0 tablet:py-10 mobile1:pt-20">
                <div className="relative  pt-[5%] tablet3:pt-[30%] tablet3:grid tablet3:gap-12 mobile2:gap-14 mobile1:gap-14 mobile1:pt-20">
                  <div className=" absolute right-8 top-[18px] xl:top-6">
                    <div className="flex gap-0 bg-[#FFB636] rounded-[40px] p-[1px] w-[224px] mobile:w-[191px]">
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
                  <div className="grid gap-2 h-auto">
                    <div className="text-white w-[450px] tablet:w-[400px] tablet3:w-[350px] mobile:w-auto mobile:mr-5  text-[35px] xl:text-[30px] tablet:text-[25px] mobile1:text-[25px]  font-semibold ">
                      {DisplayedProduct.Title}
                    </div>
                    {AvailablePlatforms.length !== 0 ? (
                      <div className="flex flex-wrap gap-1">
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
                    ) : (
                      <></>
                    )}
                    {AvailableColours.length !== 0 ? (
                      <div className="flex flex-wrap gap-2 pb-2 h-auto">
                        {AvailableColours.map((index) => {
                          let mycolor = `bg-[#${index.Code.replace(
                            /['"]+/g,
                            ""
                          )}]`;
                          return (
                            <div className="flex flex-wrap gap-4">
                              <div className="flex flex-wrap">
                                <button
                                  onClick={() => {
                                    getColour(index);
                                  }}
                                  className={` uppercase font-semibold border-[1px] border-[#FFB636] px-3 h-5 mobile1:h-6 rounded-md text-[12px]  ${
                                    selectedColour !== index.Title
                                      ? "text-[#FFB636] bg-transparent"
                                      : " bg-[#FFB636] text-black"
                                  }`}
                                >
                                  {index.Title}
                                </button>
                                {/* <button
                                className={`rounded-full w-5 h-5 border border-black bg-[#${index.Code}]`}
                              >
                                {console.log(index.Code)}{" "}
                              </button> */}
                              </div>
                            </div>
                          );
                          // }\
                        })}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                {DisplayedProduct.Genre.length !== 0 &&
                DisplayedProduct.Tags.length !== 0 ? (
                  <div className="overflow-y-auto productTitle h-auto w-[350px] mt-1 tablet3:w-[300px] mobile1:pt-2">
                    <div className="grid">
                      {DisplayedProduct.Genre && (
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
                      )}

                      {DisplayedProduct.Tags && (
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
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="h-0"></div>
                )}
                {DisplayedProduct.Description && (
                  <div className="overflow-y-auto productTitle min-h-[150px] max-h-auto w-auto mr-20 tablet:mr-10 mobile:mr-5 text-white mt-2 pb-5 text-[20px]">
                    {DisplayedProduct.Description}
                  </div>
                )}

                {!isAvailable ? (
                  <div className="h-16"></div>
                ) : (
                  <div className="flex justify-center gap-5 border-y-2 border-gray-600 w-[250px] mobile1:w-[300px] pt-1 mt-2 xl:mt-5 mb-5">
                    {DisplayedProduct.OldPrice === undefined ? (
                      ""
                    ) : (
                      <div className="flex gap-4">
                        <div className="text-red-600 line-through text-[23px] mobile1:text-[20px]">
                          {DisplayedProduct.OldPrice.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ","
                          )}
                        </div>
                        {DisplayedProduct.OldPrice === undefined ? (
                          ""
                        ) : (
                          <div className="border-r-2 border-gray-600 h-5 mt-2"></div>
                        )}
                      </div>
                    )}

                    <div className="text-white text-[25px] mobile1:text-[20px]">
                      {DisplayedProduct.Price.toString().replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}{" "}
                      PKR
                    </div>
                  </div>
                )}

                <div className="tablet:pb-20 h-32 tablet3:grid tablet3:gap-10 ">
                  {!isAvailable ? (
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
                </div>

                {DisplayedProduct.Rating ? (
                  <div className="absolute bottom-10 right-10">
                    <img
                      className="w-[70px] tablet3:w-[50px]"
                      src={DisplayedProduct.Rating.Image}
                    ></img>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
