import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Fetch Users</button>
      <button className={styles.btn}>Delete Users</button>
      <Link className={styles.link} to={"/users"}>
        <button className={styles.btn}>User Details</button>
      </Link>
    </div>
  );
};

export default HomePage;
