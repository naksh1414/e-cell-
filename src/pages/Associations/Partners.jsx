import "./Associations.css";
import google from "../../assets/brandLogos/google.png";
import instagram from "../../assets/brandLogos/instagram.png";
import netflix from "../../assets/brandLogos/netflix.png";
import amazon from "../../assets/brandLogos/amazon.png";
import figma from "../../assets/brandLogos/figma.png";
import ford from "../../assets/brandLogos/ford.png";
import mercedes from "../../assets/brandLogos/mercedes.png";
import cococola from "../../assets/brandLogos/cococola.png";
import jio from "../../assets/brandLogos/jio.png";
import axis from "../../assets/brandLogos/axis.png";
import { useEffect } from "react";

function Partners() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  return (
    <div className="scroller w-[100vw]" data-direction="left" data-speed="slow">
      <div className="scroller__inner flex items-center">
        <img src={google} alt="brandlogo" className="h-20 " />
        <img src={instagram} alt="brandLogo" className="h-20 " />
        <img src={netflix} alt="brandLogo" className="h-20 " />
        <img src={amazon} alt="brandLogo" className="h-10" />
        <img src={figma} alt="brandLogo" className="h-20 " />
        <img src={ford} alt="brandLogo" className="h-20 " />
        <img src={mercedes} alt="brandLogo" className="h-20 " />
        <img src={cococola} alt="brandLogo" className="h-20 " />
        <img src={jio} alt="brandLogo" className="h-20 " />
        <img src={axis} alt="brandLogo" className="h-20 " />
      </div>
    </div>
  );
}

export default Partners;
