// import React from 'react'

// import Keepgrowing from "./keepgrowing";
import { useEffect } from "react";
import Vision from "./Vision";
import WhoWeAre from "./WhoWeAre";
import Keepgrowing from "./kg";
import { useLocation } from "react-router-dom";

const Discover = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="bg-white dark:bg-black">
      <WhoWeAre />
      <Keepgrowing />
      <Vision />
    </div>
  );
};

export default Discover;
