import Teen from "../../images/teenesbr.png";
import { useState, useEffect } from "react";
import toggel from "../../styles/Toggel.module.css";
import { useRouter } from "next/router";
import { BiError } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileBar from "../../components/common/ProfileBar";
import { AddToCart } from "../../features/counter/cartSlice";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;
  const productGroup = id;
  const token = useSelector((state) => state.user.token);
  // console.log(productGroup);

  const [Products, setProducts] = useState([]);
  const [items, setItems] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedColour, setSelectedColour] = useState();
  const [particularItem, setParticularItem] = useState(true);

  async function fetchData() {
    console.log("here");
    let response = await axios.get("https://api.venturegames.pk/ProductGroup", {
      params: {
        ProductGroup: productGroup,
      },
    });
    console.log(response);
    setProducts(response.data);
    setSelectedType(response.data[0].Type);

    if (response.data[0].Platform) {
      setSelectedPlatform(response.data[0].Platform.Title);
    }
    if (response.data[0].Colour) {
      setSelectedColour(response.data[0].Colour.Title);
    }
    // setDisplayedProduct(Products[0]);
  }

  useEffect(() => {
    console.log("hello");
    fetchData().then(() => {
      setItems(true);
    });
  }, []);

  function getTitle(SelectedObject) {
    const selPlatform = SelectedObject.Title;
    setSelectedPlatform(selPlatform);
  }

  function getColour(selectedObject) {
    const colours = selectedObject.Title;
    setSelectedColour(colours);
  }

  const [New, setNew] = useState(true);
  const [Old, setOld] = useState(false);
  const [selectedPlatformFlag, setSelectedPlatformFlag] = useState(true);

  function handleNew() {
    {
      New ? setNew(false) & setOld(true) : setNew(true) & setOld(false);
      if(Products.length > 1) {
        setSelectedType("New");
        setParticularItem(true);
      }
      else {
        setParticularItem(false);
      }
    }
  }
  function handleOld() {
    {
      Old ? setOld(false) & setNew(true) : setOld(true) & setNew(false);
      if(Products.length > 1) {
        setSelectedType("Used");
        setParticularItem(true);
      }
      else {
        setParticularItem(false);
      }
    }
  }
  // console.log(3);
  // console.log(Products);
  console.log(selectedType);
  console.log(selectedColour);
  console.log(selectedPlatform);
  // console.log(4);
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

  console.log(DisplayedProduct);

  const dispatch = useDispatch();

  const handleAddtoCart = async (DisplayedProduct) => {
    if(token && DisplayedProduct.Quantity > 0) {
      dispatch(AddToCart(DisplayedProduct));
      const jwtToken = JSON.parse(localStorage.getItem("token"));
      console.log(jwtToken);
      let config = {
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
      };
      let response = await axios.post("https://api.venturegames.pk/UpdateCart", {
        Quantity: 1,
        Product: DisplayedProduct._id
      }, config);
      console.log(response);
    }
    else if(DisplayedProduct.Quantity <= 0) {
      alert('Product Not available');
    }
    else {
      router.push('/login');
    }
  };

  // console.log(0);
  // console.log(DisplayedProduct);
  // console.log(1);
  return (
    <>
      <ProfileBar cartshow={true} />
      {!items ? (
        !items && (
          <div className="bg-[#FFB636] snap-center pt-[20%] w-[100%] min-h-[140vh] flex justify-center text-white text-[35px]">
            <div className="text-white text-[35px] mt-[8px] mr-4">
              <BiError />
            </div>
            Product Not Found
          </div>
        )
      ) : (
        <div className="bg-[#FFB636] snap-start flex justify-center items-center min-h-[140vh] max-h-[100%] mobile2:py-[4%]">
          <div className="flex justify-center ">
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
                        onClick={handleNew}
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
                        onClick={handleOld}
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
                      {DisplayedProduct.ProductGroup.AvailablePlatforms.map(
                        (index) => {
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
                                    ? "bg-[#FFB636] text-black"
                                    : "text-[#FFB636] bg-transparent"
                                }`}
                              >
                                {index.Title}
                              </button>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="flex gap-1">
                      {DisplayedProduct.ProductGroup.AvailableColours.map(
                        (index) => {
                          if (selectedColour === index.Title) {
                            return (
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
                            );
                          } else {
                            return (
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
                            );
                          }
                        }
                      )}
                    </div>
                  </div>
                </div>
                <div className="overflow-y-scroll desp-scroll h-[150px] w-[350px] mt-4 xl:h-[80px] tablet:h-[120px] tablet3:w-[300px] mobile1:pt-2">
                  <div className="grid">
                    <div className="grid gap-5 xl:gap-2 mobile1:gap-0">
                      <div className="flex">
                        {/* {Object.values(ProductItems.Genre).map((i) => (
                    <div
                      key={i}
                      className="text-gray-400 text-[25px] mobile1:text-[20px] capitalize"
                    >
                      {i.Title}{" "}
                      <span className="text-[40px] mobile1:text-[20px]">
                        .{" "}
                      </span>
                    </div>
                  ))} */}
                      </div>
                      <div className="border-b-[2px] border-gray-400 w-[250px]"></div>
                    </div>
                    <div className="text-gray-400 text-[25px] mobile1:text-[20px] mobile1:pt-[-20px]">
                      Single Player <span className="text-[40px]">.</span> 2020
                    </div>
                  </div>
                  <div className="text-white pt-0 pb-5">
                    {DisplayedProduct.Description}
                  </div>
                </div>
                <div className="flex gap-5 border-y-2 border-gray-600 w-[250px] mobile1:w-[300px] pt-1 xl:mt-5 mb-5">
                  <div className="text-red-600 line-through text-[23px] mobile1:text-[20px]">
                    {DisplayedProduct.Price}
                  </div>
                  <div className="border-r-2 border-gray-600 h-5 mt-3"></div>
                  <div className="text-white text-[25px] mobile1:text-[20px]">
                    {DisplayedProduct.Price} PKR
                  </div>
                </div>

                <div className="tablet:pb-[0px] tablet3:grid tablet3:gap-10">
                  <div className="flex gap-2">
                    <button className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black cursor-pointer">
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleAddtoCart(DisplayedProduct)}
                      className="text-[#FFB636] font-semibold bg-transparent border-[1px] border-[#FFB636] px-3 h-7 mobile1:h-8 rounded-md text-[17px] hover:bg-[#FFB636] hover:text-black "
                    >
                      Add to Cart
                    </button>
                  </div>

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