import React from "react";

import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeatureProducts from "./FeatureProducts";

export default function Home() {
  let data = {
    name: "r-store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
}
