import styles from "./Simplify.module.scss";
import Button from "../UI/Button/Button";

const Simplify = () => {
  return (
    <section className={styles.callToAction}>
      <h2>Simplify how your team works today.</h2>
      <Button name="Get started" bg="lightGrey" />
    </section>
  );
};

export default Simplify;
