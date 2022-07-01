import styles from "./ReviewItem.module.scss";

const ReviewItem = (props) => {
  return (
    <div className={styles.reviewItem}>
      <img src={props.avatar} alt="" />
      <h4>{props.name}</h4>
      <p>
        <q>{props.text}</q>
      </p>
    </div>
  );
};

export default ReviewItem;
