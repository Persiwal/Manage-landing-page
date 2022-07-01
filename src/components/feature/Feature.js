import styles from "./Feature.module.scss";
import FeatureItem from "./FeatureItem/FeatureItem";

const Feature = () => {
  const features = [
    {
      title: "Track-company-wide progress",
      content:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      title: "Advanced built-in reports",
      content:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build ont the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      content:
        "Stop jumping from one servie to another to ocmmuniate store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <section className={styles.feature}>
      <div className={styles.intro}>
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your teams needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <ul className={styles.items}>
        {features.map((feature, index) => {
          return (
            <FeatureItem
              key={index}
              title={feature.title}
              content={feature.content}
              index={index + 1}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Feature;
