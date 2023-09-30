import React, { useEffect, useState } from "react";
import image1 from "../../images/hill1.png";
import image2 from "../../images/hill2.png";
import image3 from "../../images/hill3.png";
import image4 from "../../images/hill4.png";
import image5 from "../../images/hill5.png";

import plant from "../../images/plant.png";
import leaf from "../../images/leaf.png";
import tree from "../../images/tree.png";

const Parallax = () => {
  const [textMargin, setTextMargin] = useState(0);
  const [leafTop, setLeafTop] = useState(0);
  const [hillTop, setHillTop] = useState(0);
  const [Left, setLeft] = useState(0);
  const [Right, setRight] = useState(0);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    setTextMargin(value * 1 + "px");
    setLeafTop(value * -1 + "px");
    setLeft(value * 1.5 + "px");
    setRight(value * -1.5 + "px");
    setHillTop(value * 1 + "px");
  });

  return (
    <React.Fragment>
      <div className="parallax w-screen h-[85dvh] bg-white">
        <h1
          style={{ marginTop: textMargin }}
          className="w-screen dvh-height absolute top-0 text-center flex items-center justify-center font-robot font-bold text-3xl text-white z-[1]"
        >
          PARALLAX EFFECT IN REACT JS
        </h1>

        <div className="images w-screen dvh-height absolute top-0 overflow-x-hidden">
          <img
            src={image1}
            alt="image 1"
            id="hill1"
            style={{ top: hillTop }}
            className="parallax-image z-index-negative"
          />
          <img
            src={image2}
            alt="image 2"
            className="top-0 parallax-image z-index-negative"
          />
          <img
            src={image3}
            alt="image 3"
            className="top-0 parallax-image z-index-negative"
          />
          <img
            src={image4}
            alt="image 4"
            style={{ left: Right }}
            className="top-0 parallax-image z-index-negative"
          />
          <img
            src={image5}
            alt="image 5"
            style={{ left: Left }}
            className="top-0 parallax-image z-index-negative"
          />
          <img
            src={leaf}
            alt="leaf"
            style={{ top: leafTop, left: Left }}
            className="parallax-image z-[2]"
          />
          <img
            src={tree}
            alt="tree"
            className="top-0 parallax-image z-index-negative"
          />
          <img src={plant} alt="plant" className="top-0 parallax-image z-[3]" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Parallax;
