import { useState, useRef, useEffect } from "react";
import styles from "./Reviews.module.scss";
import ReviewItem from "./ReviewItem/ReviewItem";
import Dots from "./Dots/Dots";
import Button from "../UI/Button/Button";

import avatarAli from "../../assets/avatar-ali.png";
import avatarAnisha from "../../assets/avatar-anisha.png";
import avatarRichard from "../../assets/avatar-richard.png";
import avatarShanai from "../../assets/avatar-shanai.png";

const Reviews = () => {
  const [x, setX] = useState(0); // state for setting slider position
  const [activeIndex, setActiveIndex] = useState(0); //state for apllying styles to dots
  const sliderRef = useRef();
  let sliderTransform = { transform: `translateX(-${x}%)` };

  const dotClickHandler = (x) => {
    setX(x);
    setActiveIndex(x / 25);
  };

  //change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (x < 75) {
        setX((prev) => prev + 25);
        setActiveIndex(x / 25 + 1);
      } else {
        setX(0);
        setActiveIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const reviews = [
    {
      name: "Anisha Li",
      avatar: avatarAnisha,
      text: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at al times keeps everyone motivated.",
    },
    {
      name: "Ali Bravo",
      avatar: avatarAli,
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      name: "Richard Watts",
      avatar: avatarRichard,
      text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending  them to everyone i talk to!",
    },
    {
      name: "Shanai Gough",
      avatar: avatarShanai,
      text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive.",
    },
  ];

  return (
    <section className={styles.reviews}>
      <h2>What they've said</h2>
      <div className={styles.carousel}>
        <div className={styles.slider} ref={sliderRef} style={sliderTransform}>
          {reviews.map((review, index) => {
            return (
              <ReviewItem
                key={index}
                avatar={review.avatar}
                name={review.name}
                text={review.text}
              />
            );
          })}
        </div>
      </div>
      <Dots
        slides={reviews}
        activeIndex={activeIndex}
        handleDotClick={dotClickHandler}
      />
      <div className={styles.cta}>
        <Button name="Get started" />
      </div>
    </section>
  );
};

export default Reviews;
