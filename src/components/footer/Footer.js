import { useState } from "react";
import styles from "./Footer.module.scss";

import logo from "../../assets/logo-footer.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import youtube from "../../assets/icon-youtube.svg";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    setIsEmailValid(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (inputValue.match(emailRegex)) {
      console.log(`Email send to ${inputValue}`);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.formContainer}>
        <form>
          <input
            type="email"
            placeholder="Updates in your inbox..."
            onChange={handleInputValue}
          />
          <button type="submit" onClick={submitForm}>
            GO
          </button>
        </form>
        {!isEmailValid && (
          <p className={styles.invalidEmail}>Please insert a valid email</p>
        )}
      </div>
      <div className={styles.links}>
        <div className={styles.col1}>
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
        </div>
        <div className={styles.col2}>
          <a href="#">Carrers</a>
          <a href="#">Community</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className={styles.socials}>
        <img src={facebook} alt="facebook icon" />
        <img src={youtube} alt="youtube icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={pinterest} alt="pinterest icon" />
        <img src={instagram} alt="instagram icon" />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2022. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
