import ProductCard from "../../components/common/ProductCard";
import ProfileBar from "../../components/common/ProfileBar";

export default function Product() {
  return (
    <>
      <ProfileBar cart={true} />
      <ProductCard />
    </>
  );
}
