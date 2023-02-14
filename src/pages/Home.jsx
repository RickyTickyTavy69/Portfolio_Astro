//pictures
import { useEffect, useState } from "react";
import myfoto from "../assets/foto/myfotoquadrat.png";

//styles
import styles from "./home.module.css";
//user info
import Userinfo from "../utilits/Userinfo.js";

const Home = ({ page, setPage }) => {
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

  // handles the clicks on the two buttons on the home page.
  const handleButtonClick = (event) => {
    const target = event.target.id;
    console.log(`target: ${target}`);
    if(target){
      switch(target){
        case "about":
          setPage("About");
          break;
        case "portfolio":
          setPage("Portfolio");
          break;
      }
    }
  }

  useEffect(() => {
    moveScreens();
  }, [page]);

  useEffect(() => {
    const userInfo = new Userinfo();
    const saveInfo = async () => {
      console.log("getting user info...");
      console.log("time opened", userInfo.timeOpened);
      console.log("time zone", userInfo.timezone);
      console.log("page on", userInfo.pageon());
      console.log("referrer", userInfo.referrer());
      console.log("previous", userInfo.previousSites());
      console.log("browserInfo", userInfo.browserInfo());
      console.log("cookie", userInfo.dataCookies());
      console.log("storage", userInfo.dataStorage());
      console.log("location", await userInfo.position());
      const location = await userInfo.position();
      const infoObject = {
        time: userInfo.timeOpened,
        timeZone: userInfo.timezone,
        referrer: userInfo.referrer(),
        cookie: userInfo.dataCookies(),
        storage: userInfo.dataStorage(),
        location: {lat: location.coords.latitude, long: location.coords.longitude},
      }
      const infoJson = JSON.stringify(infoObject);
      try{
        const response = await fetch("astroportfoliobackend-production.up.railway.app/userInfo/getInfo", {
          method: "POST",
          body: infoJson,
          headers: {"Content-Type": "application/json"}
        });
        console.log("resp data", response.data);
      } catch(e){
        console.log("error", e)
      }

    }
    saveInfo();


  }, [])

  return (
    <main className={mainStyles}>
      <section className={styles.home}>
        <div className={styles.picture}>
          <img className={styles.foto} src={myfoto} alt="my foto" />
        </div>
        <div className={styles.info}>
          <h2>Hi There!</h2>
          <h1>My Name is Artem Bakirov</h1>
          <p>
            I am a junior Full-Stack Web Developer, based in Düsseldorf,
            Germany. I like to develop and build Websites with different
            technologies.
          </p>
          <div onClick={handleButtonClick} className={styles.buttons}>
            <button id={"about"} className={styles.more}>More about me</button>
            <button id={"portfolio"} className={styles.portfolio}>Portfolio</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
