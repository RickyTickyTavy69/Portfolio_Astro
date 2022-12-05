import { useState } from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    if (id) {
      switch (id) {
        case "navAbout":
          break;
      }
    }

    setOpen(!open);
  };

  return (
    <div
      onClick={handleMenuClick}
      className={
        open ? `${styles.navcontainer} ${styles.active}` : styles.navcontainer
      }
    >
      <div
        className={
          open ? `${styles.menuIcon} ${styles.active}` : styles.menuIcon
        }
      >
        <span></span>
      </div>
      <ul
        className={
          open ? `${styles.menuBody} ${styles.active}` : styles.menuBody
        }
      >
        <li id="navHome">
          <i id="navHome" className="material-icons">
            home
          </i>
          <span id="navHome">Home</span>
        </li>
        <li id="navAbout">
          <i id="navAbout" className="material-icons">
            person
          </i>
          <span id="navAbout">About</span>
        </li>
        <li id="navPortfolio">
          <i id="navPortfolio" className="material-icons">
            library_books
          </i>
          <span id="navPortfolio">Portfolio</span>
        </li>
        <li id="navContact">
          <i id="navContact" className="material-icons">
            alternate_email
          </i>
          <span id="navContact">Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
