// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 function ScrollToTop({ selector } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (selector) {
      // agar aapka scrollable container koi element hai (eg. <main className="app-main">)
      const el = document.querySelector(selector);
      if (el) {
        el.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }
    }
    // default: pura window scroll top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, selector]);

  return null;
}


export default ScrollToTop