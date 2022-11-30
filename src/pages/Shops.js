import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ShopsComponents from "../components/Home/ShopsComponents";
import Tags from "../components/Home/Tags";

const Shops = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      {/* shops */}
      <Tags />
      <ShopsComponents />
    </div>
  );
};

export default Shops;
