import { useState } from "react";

//components
import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

//components small layout
import NavMenu from "./NavMenu";

//styles
import styles from "./main.module.css";

import Navigation from "../components/navigation";

const Main = () => {
  const [page, setPage] = useState("Portfolio");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigation}>
        <Navigation page={page} setPage={setPage} />
      </div>

      <div className={styles.switchPages}>
        <Home page={page} setPage={setPage}/>
        <About page={page} />
        <Portfolio page={page} />
        <Contact page={page} />
      </div>

      <div className={styles.smallLayout}>
        <NavMenu page={page} setPage={setPage} />
        <About page={page} setPage={setPage} />
        <Portfolio page={page} setPage={setPage} />
        <Contact page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Main;
