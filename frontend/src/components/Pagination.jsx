import React from 'react'
import styles from "./Pagination.module.css";
const Pagination = ({current,totalPages,setPage}) => {
    let pages = new Array(totalPages).fill(0).map((el, i) => (
      <button
        className={styles.paginationBtn}
        onClick={() => setPage(i + 1)}
        disabled={current === i + 1}
        key={i + 1}
      >
        {i + 1}
      </button>
    ));
  return (
    <div className={styles.paginationDiv}>{pages}</div>
  )
}

export default Pagination