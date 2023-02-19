import React from 'react'
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Fetch Users</button>
      <button className={styles.btn}>Delete Users</button>
      <button className={styles.btn}>User Details</button>
    </div>
  )
}

export default HomePage