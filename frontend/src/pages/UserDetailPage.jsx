import React, { useEffect, useState } from "react";
import styles from "./UserDetailsPage.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import {MdCopyAll} from "react-icons/md"
import { Link } from "react-router-dom";
const UserDetailPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let response = await fetch("https://randomuser.me/api/?results=50");
      response = await response.json();
      setData(response.results);
      console.log(response.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.backIconDiv}>
        <Link to={"/"}>
          <IoArrowBackOutline style={{ fontSize: "32px" }} />
        </Link>
        <h2 className={styles.user_details_heading}>User Details</h2>
      </div>
      <table className={styles.customTable}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Avatar</th>
            <th className={styles.tableHead}>Name</th>
            <th className={styles.tableHead}>Email</th>
            <th className={styles.tableHead}>Gender</th>
            <th className={styles.tableHead}>Address</th>
            <th className={styles.tableHead}>City</th>
            <th className={styles.tableHead}>State</th>
            <th className={styles.tableHead}>Country</th>
            <th className={styles.tableHead}>Phone</th>
            <th className={styles.tableHead}>Age</th>
            <th className={styles.tableHead}>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => (
            <tr key={index} className={styles.tableRow}>
              <td className={styles.tableData}>
                <img
                  className={styles.avatar_image}
                  src={elem?.picture?.thumbnail}
                  alt={elem?.name?.first + " " + elem?.name?.last}
                />
              </td>
              <td className={styles.tableData}>
                {elem?.name?.title +
                  " " +
                  elem?.name?.first +
                  " " +
                  elem?.name?.last}
              </td>
              <td className={styles.tableData}>
                <div>
                  {elem?.email} <MdCopyAll style={{ fontSize: "16px" }} />
                </div>
              </td>
              <td className={styles.tableData}>{elem?.gender}</td>
              <td className={styles.tableData}>
                {elem?.location?.street?.number +
                  " " +
                  elem?.location?.street?.name}
              </td>
              <td className={styles.tableData}>{elem?.location?.city}</td>
              <td className={styles.tableData}>{elem?.location?.state}</td>
              <td className={styles.tableData}>{elem?.location?.country}</td>
              <td className={styles.tableData}>{elem?.phone}</td>
              <td className={styles.tableData}>{elem?.dob?.age}</td>
              <td className={styles.tableData}>{elem?.dob?.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailPage;
