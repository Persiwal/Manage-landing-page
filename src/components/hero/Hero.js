import styles from "./Hero.module.scss";
import introImg from "../../assets/illustration-intro.svg";

import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.introImg}>
        <img src={introImg} alt="" />
      </div>
      <div className={styles.text}>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button name="Get started" />
      </div>
    </section>
  );
};

export default Hero;
