import { useState } from "react";
import styles from "./navigation.module.css";

const Navigation = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    if (id) {
      switch (id) {
        case "navAbout":
          setPage("About");
          break;
        case "navHome":
          setPage("Home");
          break;
        case "navPortfolio":
          setPage("Portfolio");
          break;
        case "navContact":
          setPage("Contact");
          break;
      }
    }

    setOpen(!open);
  };

  return (
    <div
      onClick={handleMenuClick}
      className={
        open
          ? `${styles.navcontainer} ${styles.active} ` +
            (page === "About" || page === "Portfolio" ? ` ${styles.black}` : "")
          : styles.navcontainer +
            (page === "About" || page === "Portfolio" ? ` ${styles.black}` : "")
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
          open
            ? `${styles.menuBody} ${styles.active}` +
              (page === "About" || page === "Portfolio"
                ? ` ${styles.black}`
                : "")
            : styles.menuBody +
              (page === "About" || page === "Portfolio"
                ? ` ${styles.black}`
                : "")
        }
      >
        <li id="navHome">
          <i id="navHome" className="material-icons">
            home
          </i>
          <span data-style="Home" id="navHome">Home</span>
        </li>
        <li id="navAbout">
          <i id="navAbout" className="material-icons">
            person
          </i>
          <span data-style="About" id="navAbout">About</span>
        </li>
        <li id="navPortfolio">
          <i id="navPortfolio" className="material-icons">
            library_books
          </i>
          <span data-style="Portfolio" id="navPortfolio">Portfolio</span>
        </li>
        <li id="navContact">
          <i id="navContact" className="material-icons">
            alternate_email
          </i>
          <span data-style="Contact" id="navContact">Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
