"use client";

import dynamic from "next/dynamic";
import * as React from "react";
import Content from "./content/page";
import Contactpage from "@/components/Contactpage";
import GridImages from "./gridimages/page";

const Carousel = dynamic(() => import("@/components/CarouselComponent"), {
  ssr: false,
});

const App = () => {
  return (
    <div className="w-full p-2 m-3">
      <Carousel />
      <Content />
      <GridImages />
      <Contactpage />
    </div>
  );
};

export default App;
