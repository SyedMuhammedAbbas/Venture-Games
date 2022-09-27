import { Allproductsdata } from "../common/AllProductsData";

export default async (req, res) => {
  const { pid } = req.query;
  const product = await Allproductsdata.findOne({ _id: pid });
  res.status(200).json(product);
};
