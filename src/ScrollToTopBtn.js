import React from "react";
import { useEffect, useState } from "react";
import "./ScrollToTopBtn.css";

function ScrollToTopBtn() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollToTopBtn">
      {backToTopButton && (
        <button 
        className="scrollToTop-btn" 
        onClick={scrollUp}>
          ^
        </button>
      )}
    </div>
  );
}

export default ScrollToTopBtn;

// style={{
//     z-index: "999",
//     position: "fixed",
//     background: "#0e6dac",
//     color: "#fff",
//     width: "45px",
//     height: "45px",
//     right: "45px",
//     bottom: "10px",
//     font-size: "22px",
//     text-align: "center",
//     line-height: "45px",
//     border-radius: "10px",
//     border-color: "wheat",
//     cursor: "pointer",
//     pointer-events: "none",
//     opacity: "1",

// }}
