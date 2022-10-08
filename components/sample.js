var productGroups = {
  spiderman: [
    {
      _id: "63373cbc2a39742c5ca8f712",
      Title: "123",
      Weight: 123,
      isKid: false,
      Price: 123,
      BuyingPrice: 123,
      Description: "123",
      Type: "New",
      Genre: [
        {
          _id: "6335857445b0f10b6ec17e5c",
          Title: "Action",
        },
      ],
      ProductCategory: "Games",
      Platform: {
        _id: "6335aaf1a365eeb5ab5519bf",
        Title: "ps5",
      },
      Images: [
        "https://venture-games.s3.amazonaws.com/1641051570670vlcsnap-2022-01-01-20h39m30s666.png",
      ],
      Quantity: 0,
      AvgBuyingPrice: 0,
      AvgLogisticsPrice: 0,
      AvgPrice: 0,
      createdAt: "2022-09-30T19:00:12.754Z",
      updatedAt: "2022-09-30T19:00:13.804Z",
      __v: 0,
    },
    {
      _id: "63373e342a39742c5ca8f725",
      Title: "1234",
      Weight: 123,
      isKid: false,
      Price: 123,
      BuyingPrice: 123,
      Description: "123",
      Type: "Used",
      Genre: [
        {
          _id: "6335857445b0f10b6ec17e5c",
          Title: "Action",
        },
      ],
      ProductCategory: "Games",
      Platform: {
        _id: "6335aaf8a365eeb5ab5519c3",
        Title: "xbox",
      },
      Images: [
        "https://venture-games.s3.amazonaws.com/1641051570670vlcsnap-2022-01-01-20h39m30s666.png",
      ],
      Quantity: 0,
      AvgBuyingPrice: 0,
      AvgLogisticsPrice: 0,
      AvgPrice: 0,
      createdAt: "2022-09-30T19:06:28.988Z",
      updatedAt: "2022-09-30T19:06:29.315Z",
      __v: 0,
    },
  ],
};

types = {
  New: ["ps5"],
  Used: ["ps4"],
};

productGroups.map((productGroup) => {
  //For product page
  let types = {};
  productGroup.forEach((product) => {
    if (types[product.Type]) {
      types[product.Type].push(product.Platform.Title);
    } else {
      types[product.Type] = [product.Platform.Title];
    }
  });
  let selectedType = "New";
  const platformtags = types[selectedType];
  if (!platformtags) {
    return <div>No Products Available</div>;
  }
  let selectedPlatform = platformtags[0];
  const product = productGroup.find(
    (product) =>
      product.Type == selectedType && product.Platform.Title == selectedPlatform
  );

  //For shop page
  let platform = {};
  productGroup.forEach((product) => {
    platform[product.Platform.Title] = true;
  });
  const allPlatforms = Object.values(platform);

  return <div></div>;
});

for (let product in products) {
  if (productGroups[product.Title]) {
    productGroups[product.Title].push(product);
  } else {
    productGroups[product.Title] = [product];
  }
}

let a = [];

<div className="h-[500px] p-2 rounded-3xl bg-gradient-to-r from-black to-[#1c1c1c] w-[350px] mobile:w-[350px]">
  <img
    className="rounded-3xl flex justify-center h-[340px] object-cover w-[340px] mobile:w-[330px]"
    src={getData[0].Images}
  />
  <div className="flex gap-1 mt-[-30px] ml-[10px]">
    {/* {getData.map((index) => (
          <button
            key={index}
            className="text-black font-semibold uppercase bg-[#FFB636] px-3 rounded-md text-[12px]"
          >
            {index.Platform.Title}
          </button>
        ))} */}
  </div>
  <div className="grid justify-center gap-3">
    <div className="text-white text-center text-[23px] h-8 overflow-auto desp-scroll mobile:text-[20px] mt-5">
      {getData[0].Title}
    </div>
    <div className="flex gap-5 justify-center">
      <div className="text-red-600 line-through text-[25px] mobile:text-[19px]">
        {getData[0].Price}
      </div>
      <div className="text-white text-[25px] mobile:text-[21px]">
        {getData[0].Price} PKR
      </div>
    </div>
    <div className="flex justify-center gap-2 mt-[-7px] mb-5">
      <button
        onClick={() => sendProps()}
        className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-8 py-1 hover:bg-white hover:text-black hover:border-black"
      >
        <a>View</a>
      </button>

      <button
        onClick={() => handleAddtoCart(product)}
        className="text-white border-[1px] font-semibold border-white rounded-lg text-[15px] px-4 py-1 hover:bg-white hover:text-black hover:border-black"
      >
        <a>Add to cart</a>
      </button>
    </div>
  </div>
</div>;
