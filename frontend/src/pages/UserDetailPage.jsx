import React from "react";
import styles from "./UserDetailsPage.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const UserDetailPage = () => {
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
            <th className={styles.tableHead}>Columns 1</th>
            <th className={styles.tableHead}>Columns 2</th>
            <th className={styles.tableHead}>Columns 3</th>
            <th className={styles.tableHead}>Columns 4</th>
            <th className={styles.tableHead}>Columns 5</th>
            <th className={styles.tableHead}>Columns 6</th>
            <th className={styles.tableHead}>Columns 7</th>
            <th className={styles.tableHead}>Columns 8</th>
            <th className={styles.tableHead}>Columns 9</th>
            <th className={styles.tableHead}>Columns 10</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>Data 1</td>
            <td className={styles.tableData}>Data 2</td>
            <td className={styles.tableData}>Data 3</td>
            <td className={styles.tableData}>Data 4</td>
            <td className={styles.tableData}>Data 5</td>
            <td className={styles.tableData}>Data 6</td>
            <td className={styles.tableData}>Data 7</td>
            <td className={styles.tableData}>Data 8</td>
            <td className={styles.tableData}>Data 9</td>
            <td className={styles.tableData}>Data 10</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>Data 1</td>
            <td className={styles.tableData}>Data 2</td>
            <td className={styles.tableData}>Data 3</td>
            <td className={styles.tableData}>Data 4</td>
            <td className={styles.tableData}>Data 5</td>
            <td className={styles.tableData}>Data 6</td>
            <td className={styles.tableData}>Data 7</td>
            <td className={styles.tableData}>Data 8</td>
            <td className={styles.tableData}>Data 9</td>
            <td className={styles.tableData}>Data 10</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>Data 1</td>
            <td className={styles.tableData}>Data 2</td>
            <td className={styles.tableData}>Data 3</td>
            <td className={styles.tableData}>Data 4</td>
            <td className={styles.tableData}>Data 5</td>
            <td className={styles.tableData}>Data 6</td>
            <td className={styles.tableData}>Data 7</td>
            <td className={styles.tableData}>Data 8</td>
            <td className={styles.tableData}>Data 9</td>
            <td className={styles.tableData}>Data 10</td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableData}>Data 1</td>
            <td className={styles.tableData}>Data 2</td>
            <td className={styles.tableData}>Data 3</td>
            <td className={styles.tableData}>Data 4</td>
            <td className={styles.tableData}>Data 5</td>
            <td className={styles.tableData}>Data 6</td>
            <td className={styles.tableData}>Data 7</td>
            <td className={styles.tableData}>Data 8</td>
            <td className={styles.tableData}>Data 9</td>
            <td className={styles.tableData}>Data 10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailPage;
