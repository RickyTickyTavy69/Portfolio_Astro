//pictures
import myfoto from "../assets/foto/myfotoquadrat.png";

//styles
import styles from "./home.module.css";

const Home = ({ page }) => {
  return (
    <main
      className={
        page === "Home" ? `${styles.main} ${styles.active}` : styles.main
      }
    >
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
