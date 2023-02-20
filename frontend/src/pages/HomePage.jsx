import React, { useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { BACKEND_API_URL } from "../api/api";
const HomePage = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  // Adding 50 new user's data in backend
  const handleFetch = async () => {
    if (isFetching) {
      alert("Data fetching is in the process");
      return;
    }
    try {
      setIsFetching(true);
      let response = await fetch(BACKEND_API_URL + "user/add", {
        method: "POST",
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      response = await response.json();
      console.log(response);
      alert("Data fetching has done");
      setIsFetching(false);
    } catch (error) {
      alert("Something went wrong! see console for more information.");
      setIsError(true);
      setIsFetching(false);
      console.log(error);
    }
  };

  // Removing all user's data from backend
  const handleDelete = async () => {
    if (confirm("All data will be deleted! If you want to delete, click OK.")) {
      try {
        let response = await fetch(BACKEND_API_URL + "user/delete", {
          method: "DELETE",
          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        response = await response.json();
        console.log(response);
        if (response.acknowledged && response.deletedCount > 0) {
          alert("Users deleted successfully");
        } else {
          alert("The database is empty; please add new records!");
        }
      } catch (error) {
        alert("Something went wrong! see console for more information.");
        console.log(error);
      }
    }
  };
  return (
    <>
      <h1 className={styles.homePage_heading}>Home Page</h1>
      <div className={styles.container}>
        <button className={styles.btn} onClick={handleFetch}>
          Fetch Users
        </button>
        <button className={styles.btn} onClick={handleDelete}>
          Delete Users
        </button>
        <Link className={styles.link} to={"/users"}>
          <button className={styles.btn}>User Details</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
