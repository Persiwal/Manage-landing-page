import useMediaQuery from "../../hooks/use-mediaQuery";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Menu from "./Menu/Menu";
import Button from "../UI/Button/Button";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:926px)");

  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <Menu />
      {isDesktop && <Button name="Get started" />}
    </div>
  );
};

export default Header;
