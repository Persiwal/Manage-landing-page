import styles from "./Button.module.scss";

const Button = (props) => {
  const handleClick = () => {};

  return (
    <button
      className={`${styles.button}  ${
        props.bg === "lightGrey" ? styles.bgLightGrey : styles.bgBrightRed
      }`}
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
