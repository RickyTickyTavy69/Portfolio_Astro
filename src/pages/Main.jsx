import { useState } from "react";

//components
import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

//styles
import styles from "./main.module.css";

import Navigation from "../components/navigation";

const Main = () => {
  const [page, setPage] = useState("Portfolio");

  return (
    <div>
      <Navigation page={page} setPage={setPage} />
      <div className={styles.switchPages}>
        <Home page={page} />
        <About page={page} />
        <Portfolio page={page} />
        <Contact page={page} />
      </div>
    </div>
  );
};

export default Main;
