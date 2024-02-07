// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Scroll.css"; // Import the corresponding CSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
     // This function checks the window's scroll position and toggles visibility accordingly
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  // Add a scroll event listener to trigger toggleVisibility when the user scrolls
    window.addEventListener("scroll", toggleVisibility);
     // Clean up by removing the scroll event listener when the component unmounts
    return () => {
       
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);// The empty dependency array ensures this effect runs only once

  // This function is called when the button is clicked to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll smoothly with animation
    });
  };

  // Render the button if it should be visible

  return isVisible ? (
    <div className="scroll-to-top-button" onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  ) : null;
};

export default ScrollToTopButton;
