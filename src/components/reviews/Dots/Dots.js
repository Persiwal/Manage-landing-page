import styles from "./Dots.module.scss";

const Dots = (props) => {
  const handleDotClick = (e) => {
    props.handleDotClick(e.target.getAttribute("data-key") * 25);
  };

  return (
    <div className={styles.dots}>
      {props.slides.map((slide, index) => {
        return (
          <span
            key={index}
            className={`${styles.dot} ${
              props.activeIndex === index && styles.activeDot
            }`}
            onClick={handleDotClick}
            data-key={index}
          ></span>
        );
      })}
    </div>
  );
};

export default Dots;
