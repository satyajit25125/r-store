import React from "react";
import HeroSection from "./HeroSection";

export default function About() {
  const data = {
    name: "R Ecommerce",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
}
