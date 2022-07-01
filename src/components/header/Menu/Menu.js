import { useState, useEffect } from "react";
import useMediaQuery from "../../../hooks/use-mediaQuery";

import styles from "./Menu.module.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:926px)");

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // prevent from scrolling when mobile menu is open
  useEffect(() => {
    isOpen
      ? (document.querySelector("body").style.overflowY = "hidden")
      : (document.querySelector("body").style.overflowY = "visible");
  }, [isOpen]);

  return (
    <nav>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleOpen}
      >
        <span></span>
      </div>
      {isOpen && !isDesktop && (
        <div className={styles.overlay}>
          <div className={styles.mobileNav}>
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      )}
      <ul className={styles.desktopNav}>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
