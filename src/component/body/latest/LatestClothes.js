import React, { useState } from "react";
import LatestComponent from "./latestComponent/LatestComponent";
import demo from "./demo";
import demo2 from "./demo2";
import demo3 from "./demo3";
import "./latest.css";

const LatestClothes = () => {
  const [demos, setDemo] = useState(demo);
  const [demos2, setDemo2] = useState(demo2);
  const [demos3, setDemo3] = useState(demo3);
  /* console.log(demos); */
  return (
    <>
      <LatestComponent demo={demos} />
      <hr className="naveLine" />
      <LatestComponent demo={demos2} />
      <hr className="naveLine" />
      <LatestComponent demo={demos3} />
    </>
  );
};

export default LatestClothes;
