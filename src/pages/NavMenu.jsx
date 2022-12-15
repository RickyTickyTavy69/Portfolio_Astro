import styles from "./navmenu.module.css";
import { useEffect, useState } from "react";

const NavMenu = ({ page, setPage }) => {
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
    <div className={mainStyles}>
      <section className={styles.navigationBlocks}>
        <div className={styles.navBloc}>About me</div>
        <div className={styles.navBloc}>Portfolio</div>
        <div className={styles.navBloc}>Get in Touch</div>
      </section>
    </div>
  );
};

export default NavMenu;
