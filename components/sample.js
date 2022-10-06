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
