//react
import { useState } from "react";

import styles from "./portfolio.module.css";

const Portfolio = ({ page }) => {
  //show image on mouseover

  const showLink = (event) => {
    console.log(event.target.id);
    if (event.target.id === "projekt") {
      const mouseover = event.target;
      console.log("mouseover", mouseover);
      mouseover.classList.add(styles.active);
    }
  };

  const hideLink = (event) => {
    console.log(event.target.id);
    if (event.target.id === "projekt") {
      const mouseover = event.target;
      console.log("mouseover", mouseover);
      mouseover.classList.remove(styles.active);
    }
  };

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
          <div
            onMouseOver={showLink}
            onMouseOut={hideLink}
            className={styles.portfolioContainer}
          >
            <div className={styles.projekt}>
              <a
                href="https://rickytickytavy69.github.io/calculator_vanillaJS/"
                target={"_blank"}
              >
                <div id="projekt">Calculator</div>
                <div id="projekt" className={styles.mouseover}>
                  Visit Projeсt
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a
                href="https://rickytickytavy69.github.io/Mov_ReactJS/"
                target={"_blank"}
              >
                <div id="projekt">MOV, Front end Projeсt</div>
                <div id="projekt" className={styles.mouseover}>
                  Visit Project
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a
                href="https://rickytickytavy69.github.io/TikTakToe_VanillaJS/"
                target={"_blank"}
              >
                <div id="projekt">Rock paper scissors</div>
                <div id="projekt" className={styles.mouseover}>
                  Visit Project
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a
                href="https://rickytickytavy69.github.io/steuerproject_VanillaJS/"
                target={"_blank"}
              >
                <div id="projekt">Taxes Counter</div>
                <div id="projekt" className={styles.mouseover}>
                  Visit Project
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a href="#" target={"_blank"}>
                <div id="projekt">The Void App</div>
                <div id="projekt" className={styles.mouseover}>
                  no link, Coming soon...
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a href="#" target={"_blank"}>
                <div id="projekt">Budget counting</div>
                <div id="projekt" className={styles.mouseover}>
                  no link, Coming soon...
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a href="#" target={"_blank"}>
                <div id="projekt">Get random person</div>
                <div id="projekt" className={styles.mouseover}>
                  no link, Coming soon...
                </div>
              </a>
            </div>
            <div className={styles.projekt}>
              <a href="#" target={"_blank"}>
                <div id="projekt">!Life planning</div>
                <div id="projekt" className={styles.mouseover}>
                  no link, Coming soon...
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
