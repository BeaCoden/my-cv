import React from "react";
import Hero from "../hero/Hero";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
    </div>
  );
};

export default Home;
