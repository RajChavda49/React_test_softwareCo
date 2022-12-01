import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShopInfo from "../components/ShopDetails/ShopInfo";
import Slider from "../components/ShopDetails/Slider";
import Tags from "../components/ShopDetails/Tags";
import { Helmet } from "react-helmet";

const ShopDetails = () => {
  const [activeTag, setActiveTag] = useState("All");

  const { Fruits, Vegetables } = useSelector((s) => s.shopDetail);

  return (
    <>
      <Helmet title="ShopDetail" />
      <section className="h-auto">
        <ShopInfo />
        <section className="lg:px-20 md:px-10 px-5 md:my-10 my-5 lg:space-y-16 md:space-y-8 space-y-5 ">
          <Tags setActiveTag={setActiveTag} activeTag={activeTag} />
          {activeTag === "All" ? (
            <>
              <Slider items={Fruits} name="Fruits" />
              <Slider items={Vegetables} name="Vegetables" />
            </>
          ) : activeTag === "Fruits" ? (
            <Slider items={Fruits} name="Fruits" />
          ) : (
            <Slider items={Vegetables} name="Vegetables" />
          )}
        </section>
      </section>
    </>
  );
};

export default ShopDetails;
