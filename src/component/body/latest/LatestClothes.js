import React, { useState } from "react";
import LatestComponent from "./latestComponent/LatestComponent";
import demo from "./demo";
import demo2 from "./demo2";
import "./latest.css";

const LatestClothes = () => {
  const [demos, setDemo] = useState(demo);
  const [demos2, setDemo2] = useState(demo2);
  /* console.log(demos); */
  return (
    <>
      <LatestComponent demo={demos} />
      <hr className="naveLine" />
      <LatestComponent demo={demos2} />
    </>
  );
};

export default LatestClothes;
