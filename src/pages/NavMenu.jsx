import styles from "./navmenu.module.css";
import { useEffect, useState } from "react";

const NavMenu = ({ page, setPage }) => {
  const [mainStyles, setMainStyles] = useState(`${styles.main}`);

  const handlePageClick = (event) => {
    const target = event.target.id;
    if(target){
      switch(target){
        case "Home":
          setPage("Home");
          break;
        case "About":
          setPage("About");
          break;
        case "Portfolio":
          setPage("Portfolio");
          break;
        case "Contact":
          setPage("Contact");
          break;
      }
    }
  }

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
        break;
    }
  };

  useEffect(() => {
    moveScreens();
  }, [page]);

  return (
    <div className={mainStyles}>
      <section onClick={handlePageClick} className={styles.navigationBlocks}>
        <div id={"About"} className={styles.navBloc}>About me</div>
        <div id={"Portfolio"} className={styles.navBloc}>Portfolio</div>
        <div id={"Contact"} className={styles.navBloc}>Get in Touch</div>
      </section>
    </div>
  );
};

export default NavMenu;
