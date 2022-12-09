import styles from "./portfolio.module.css";

const Portfolio = ({ page }) => {
  return (
    <main
      className={
        page === "About" ? `${styles.main} ${styles.active}` : styles.main
      }
    >
      <div className={styles.mainContent}>
        <div>
          <h1 className={styles.title}>
            <span className={styles.titleGrey}>My </span> Portfolio
          </h1>
          <p className={styles.subtitle}>There are some of my hobby projects</p>
        </div>

        <div className={styles.portfolioSection}>
          <div className={styles.portfolioContainer}>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
            <div className={styles.projekt}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
