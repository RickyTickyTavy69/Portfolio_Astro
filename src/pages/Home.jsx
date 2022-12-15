//pictures
import { useEffect, useState } from "react";
import myfoto from "../assets/foto/myfotoquadrat.png";

//styles
import styles from "./home.module.css";

const Home = ({ page }) => {
  const [mainStyles, setMainStyles] = useState(`${styles.main}`);

  const moveScreens = () => {
    switch (page) {
      case "Home":
        setMainStyles(styles.main);
        break;
      case "About":
        setMainStyles(`${styles.main} ${styles.hide}`);
        break;
      case "Portfolio":
        setMainStyles(`${styles.main} ${styles.showPortfolio}`);
        break;
      case "Contact":
        setMainStyles(`${styles.main} ${styles.showContact}`);
    }
  };

  useEffect(() => {
    moveScreens();
  }, [page]);

  return (
    <main className={mainStyles}>
      <section className={styles.home}>
        <div className={styles.picture}>
          <img className={styles.foto} src={myfoto} alt="my foto" />
        </div>
        <div className={styles.info}>
          <h2>Hi There!</h2>
          <h1>My Name is Artem Bakirov</h1>
          <p>
            I am a junior Full-Stack Web Developer, based in Düsseldorf,
            Germany. I like to develop and build Websites with different
            technologies.
          </p>
          <div className={styles.buttons}>
            <button className={styles.more}>More about me</button>
            <button className={styles.portfolio}>Portfolio</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
