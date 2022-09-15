import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import ProfileBar from "../../components/ProfileBar";

export default function Product() {
  return (
    <>
      <ProfileBar cart={true} />
      <ProductCard />
    </>
  );
}
