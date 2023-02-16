//import assets
import myfoto from "../assets/foto/myfotoquadrat.png";
import cv from "../assets/cv/Lebenslauf_Artem_Bakirov.pdf";
//skills
import html from "../assets/skills/html-5.png";
import css from "../assets/skills/css3.png";
import Sass from "../assets/skills/sass-96.png";
import js from "../assets/skills/javascript.png";
import nodejs from "../assets/skills/inode-js-96.png";
import react from "../assets/skills/react-80.png";
import express from "../assets/skills/express-js.png";
import monogoDB from "../assets/skills/mongodb.png";
import git from "../assets/skills/git.png";
import gitHub from "../assets/skills/github.png";
import ts from "../assets/skills/typescript-96.png";

import styles from "./about.module.css";

const About = ({ page }) => {
  console.log("page is", page);
  return (
    <main
      className={
        page === "About" ? `${styles.main} ${styles.active}` : styles.main
      }
    >
      <div className={styles.mainContent}>
        <div>
          <h1 className={styles.title}>
            <span className={styles.titleGrey}>About </span> me
          </h1>
          <p className={styles.subtitle}>
            I am a junior full stack web developer and I am motivated to become
            better
          </p>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.pictureContainer}>
            <img src={myfoto} alt="my foto" />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <duv className={styles.column}>
                <div className={styles.line}>
                  <p>
                    First Name <span>Artem</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Last Name <span>Bakirov</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Birthdate <span>24.05.1996</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Level <span>Junior</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Adress <span>Düsseldorf</span>
                  </p>
                </div>
              </duv>

              <duv className={styles.column}>
                <div className={styles.line}>
                  <p>
                    Avaliable for work <span>true</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Languages <span>German, English, Russian, Spanish</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Phone <span>+491783515912</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    Email <span>bakirovartem69@gmail.com</span>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    GitHub
                    <a
                      href="https://github.com/RickyTickyTavy69/Portfolio_Astro.git"
                      target={"_blank"}
                    >
                      Go to GitHub
                    </a>
                  </p>
                </div>
                <div className={styles.line}>
                  <p>
                    LinkedIn
                    <a
                      href="https://www.linkedin.com/in/artem-white-7b0496250/"
                      target={"_blank"}
                    >
                      Go to LinkedIn
                    </a>
                  </p>
                </div>
              </duv>
            </div>

            <a className={styles.button} href={cv} download>
              Download my CV
            </a>
          </div>
        </div>

        <section className={styles.skillsSection}>
          <div className={styles.skill}>
            <img src={html} alt="react.js" />
            <h3>HTML5</h3>
          </div>
          <div className={styles.skill}>
            <img src={css} alt="react.js" />
            <h3>CSS3</h3>
          </div>
          <div className={styles.skill}>
            <img src={Sass} alt="react.js" />
            <h3>SASS</h3>
          </div>
          <div className={styles.skill}>
            <img src={js} alt="react.js" />
            <h3>JavaScript</h3>
          </div>
          <div className={styles.skill}>
            <img src={nodejs} alt="react.js" />
            <h3>Node.JS</h3>
          </div>
          <div className={styles.skill}>
            <img src={react} alt="react.js" />
            <h3>React.JS</h3>
          </div>
          <div className={styles.skill}>
            <img src={express} alt="react.js" />
            <h3>Express.JS</h3>
          </div>
          <div className={styles.skill}>
            <img src={monogoDB} alt="react.js" />
            <h3>MongoDB</h3>
          </div>
          <div className={styles.skill}>
            <img src={git} alt="react.js" />
            <h3>GIT</h3>
          </div>
          <div className={styles.skill}>
            <img src={gitHub} alt="react.js" />
            <h3>GitHub</h3>
          </div>
          <div className={styles.skill}>
            <img src={ts} alt="react.js" />
            <h3>TypeScript</h3>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
