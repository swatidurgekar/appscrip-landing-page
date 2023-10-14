import styles from "./Feature.module.css";
import Images from "./image";

const Features = () => {
  return (
    <>
      <div className={styles.firstfeature}>
        <div></div>

        <Images />
      </div>
      <div className={styles.secondfeature}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Features;
