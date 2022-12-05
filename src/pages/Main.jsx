import { useState } from "react";
import About from "./About";
import Home from "./Home";

const Main = () => {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <About page={page} />
      <Home page={page} />
    </div>
  );
};

export default Main;
