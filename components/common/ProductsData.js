import ps5DiscEdition from "../../images/products/ps5_Disc_Edition.jpg";
import Spiderman from "../../images/image 4.png";
import ps4controller2 from "../../images/products/ps4 controller 2.jpg";

export const ProductsData = {
  Spiderman: [
    {
      _id: "63373cbc2a39742c5ca8f712",
      Title: "Playstation 5 Disc Edition",
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
      Images: [ps5DiscEdition.src],
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
      Title: "Marvel's Spider-Man: Miles Morales",
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
      Images: [Spiderman.src],
      Quantity: 0,
      AvgBuyingPrice: 0,
      AvgLogisticsPrice: 0,
      AvgPrice: 0,
      createdAt: "2022-09-30T19:06:28.988Z",
      updatedAt: "2022-09-30T19:06:29.315Z",
      __v: 0,
    },
  ],
  Batman: [
    {
      _id: "633ad4660b0c8eaaa786c016",
      Title: "DualSense Controller",
      Weight: 1,
      isKid: false,
      Price: 1,
      BuyingPrice: 1,
      Description: "1",
      Type: "Used",
      Genre: [
        {
          _id: "6335857445b0f10b6ec17e5c",
          Title: "Action",
        },
        {
          _id: "633ad0b70b0c8eaaa786bfc8",
          Title: "Driving/Racing",
        },
      ],
      ProductCategory: "Games",
      Platform: {
        _id: "6335aaf8a365eeb5ab5519c3",
        Title: "ps4",
      },
      Images: [ps4controller2.src],
      Quantity: 0,
      AvgBuyingPrice: 0,
      AvgLogisticsPrice: 0,
      AvgPrice: 0,
      createdAt: "2022-10-03T12:24:06.861Z",
      updatedAt: "2022-10-03T12:24:07.251Z",
      __v: 0,
    },
    {
      _id: "633ad5180b0c8eaaa786c051",
      Title: "testing",
      Weight: 200,
      isKid: false,
      Price: 5000,
      BuyingPrice: 4998,
      Description: "testing",
      Type: "New",
      Genre: [
        {
          _id: "6335aa67a365eeb5ab5519b3",
          Title: "thriller ",
        },
        {
          _id: "633ad0b70b0c8eaaa786bfc8",
          Title: "Driving/Racing",
        },
      ],
      ProductCategory: "Games",
      Platform: {
        _id: "6335aaf1a365eeb5ab5519bf",
        Title: "nintendo",
      },
      Images: [
        "https://venture-games.s3.amazonaws.com/1664788536864image001.png",
      ],
      Quantity: 0,
      AvgBuyingPrice: 0,
      AvgLogisticsPrice: 0,
      AvgPrice: 0,
      createdAt: "2022-10-03T12:27:04.430Z",
      updatedAt: "2022-10-03T12:27:05.134Z",
      __v: 0,
    },
  ],
};
