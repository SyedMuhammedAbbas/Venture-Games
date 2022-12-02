import ProfileBar from "../../components/common/ProfileBar";
import ShopSearchedProducts from "../../components/shop/ShopSearchedProducts";
import { useState } from "react";
import ShopCover from "../../components/shop/ShopCover";
import ProfileBarMobile from "../../components/common/ProfileBarMobile";
import axios from "axios";

export async function getServerSideProps(context) {
  const { pid } = context.params;
  console.log(pid);
  if (pid) {
    let response = await axios.get("https://api.venturegames.pk/Products", {
      params: {
        Title: pid,
      },
    });
    return {
      props: { data: response.data, title: pid },
    };
  }
}

export default function Accessories({ data, title }) {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [handleFilter, sethandleFilter] = useState(false);
  const [handleSort, sethandleSort] = useState(false);
  const [handleFilterMobile, sethandleFilterMobile] = useState(false);
  const [handleSortMobile, sethandleSortMobile] = useState(false);

  return (
    <>
      <ProfileBar
        filter="true"
        sethandleFilter={sethandleFilter}
        handleFilter={handleFilter}
        sethandleSort={sethandleSort}
        handleSort={handleSort}
        cartshow={true}
        handleLogin={handleLogin}
        sethandleLogin={sethandleLogin}
        handleSignup={handleSignup}
        sethandleSignup={sethandleSignup}
      />
      <ProfileBarMobile
        handleFilterMobile={handleFilterMobile}
        sethandleFilterMobile={sethandleFilterMobile}
        handleSortMobile={handleSortMobile}
        sethandleSortMobile={sethandleSortMobile}
      />
      <div className="snap-center">
        <ShopCover />
      </div>
      <div className="snap-start">
        <ShopSearchedProducts
          title={title}
          result={data}
          handleFilter={handleFilter}
          handleSort={handleSort}
          handleFilterMobile={handleFilterMobile}
          handleSortMobile={handleSortMobile}
        />
      </div>
    </>
  );
}
