import { useState } from "react";
import About from "./About";
import Home from "./Home";

//styles
import styles from "./main.module.css";

import Navigation from "../components/navigation";

const Main = () => {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <Navigation page={page} setPage={setPage} />
      <div className={styles.switchPages}>
        <Home page={page} />
        <About page={page} />
      </div>
    </div>
  );
};

export default Main;
