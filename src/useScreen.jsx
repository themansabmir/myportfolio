import  { useState, useEffect } from "react";

const BREAKPOINTS = {
  MOBILE: 576,
  TABLET: 768,
  LAPTOP: 992,
  DESKTOP: 1200,
};

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

function getScreenSize() {
  const width = window.innerWidth;
  if (width < BREAKPOINTS.MOBILE) {
    return "MOBILE";
  } else if (width < BREAKPOINTS.TABLET) {
    return "TABLET";
  } else if (width < BREAKPOINTS.LAPTOP) {
    return "LAPTOP";
  } else {
    return "DESKTOP";
  }
}


