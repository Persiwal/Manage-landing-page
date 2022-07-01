import styles from "./FeatureItem.module.scss";

const FeatureItem = (props) => {
  return (
    <li className={styles.featureItem}>
      <div className={styles.title}>
        <span className={styles.index}>0{props.index}</span>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.content}>{props.content}</div>
    </li>
  );
};

export default FeatureItem;
