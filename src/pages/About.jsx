const age = 20 + 6;
import myfoto from "../assets/foto/myfoto.jpg";

import styles from "./about.module.css";

const About = ({ page }) => {
  return (
    <main
      className={
        page === "About" ? `${styles.main} ${styles.active}` : styles.main
      }
    >
      <div>
        <h1 className={styles.title}>About me</h1>
        <p>
          --- I am a junior full stack web developer and I am motivated to learn
          new things and become better ---
        </p>
      </div>

      <div>
        <img src={myfoto} alt="my foto" />
        <div>
          <p>Name: Artem Bakirov</p>
          <p>Age: {age}</p>
        </div>
      </div>

      <a href="/">Home</a>
    </main>
  );
};

export default About;
