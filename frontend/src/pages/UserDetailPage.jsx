import React, { useEffect, useState } from "react";
import styles from "./UserDetailsPage.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdCopyAll } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { BACKEND_API_URL } from "../api/api";
import Loader from "../components/Loader";
import Filter from "../components/Filter";
const UserDetailPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    age: "",
    gender: "",
    country: "",
    sort: "",
    page: page,
  });
  const handlePage = () => {
    setFilters({ ...filters, page: page });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
      page: 1,
    });
  };
  const handleReset = () => {
    setFilters({
      name: "",
      age: "",
      gender: "",
      country: "",
      sort: "",
    });
  };
  // Getting data on page load and whenever variables in the dependency array change
  useEffect(() => {
    getData(filters);
  }, [filters]);
  // Handling page change
  useEffect(() => {
    handlePage();
  }, [page]);

  // Getting data from backend
  const getData = async (filters) => {
    setIsLoading(true);
    try {
      let URL = BACKEND_API_URL + "user" + "?";
      for (let key in filters) {
        if (filters[key]) {
          URL += key + "=" + filters[key] + "&";
        }
      }
      console.log(URL);
      let response = await fetch(URL);
      response = await response.json();
      setData(response.data);
      setTotalPages(response.totalPages);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
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
      <Filter
        filters={filters}
        handleChange={handleChange}
        handleReset={handleReset}
      />
      {isLoading ? (
        <div className={styles.loaderDiv}>
          <Loader />
        </div>
      ) : isError ? (
        <div className={styles.loaderDiv} color={"red"}>
          Something went wrong! see console for more information
        </div>
      ) : data.length === 0 ? (
        <div className={styles.loaderDiv} color={"red"}>
          There is no data please add new records
        </div>
      ) : (
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
            {data?.map((elem, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.tableData} data-title="Avatar">
                  <img
                    className={styles.avatar_image}
                    src={elem?.picture?.large}
                    alt={elem?.name?.first + " " + elem?.name?.last}
                  />
                </td>
                <td className={styles.tableData} data-title="Name">
                  {elem?.name?.title +
                    " " +
                    elem?.name?.first +
                    " " +
                    elem?.name?.last}
                </td>
                <td className={styles.tableData} data-title="Email">
                  <div>
                    {elem?.email} <MdCopyAll style={{ fontSize: "16px" }} />
                  </div>
                </td>
                <td className={styles.tableData} data-title="Gender">
                  {elem?.gender}
                </td>
                <td className={styles.tableData} data-title="Address">
                  {elem?.location?.street?.number +
                    " " +
                    elem?.location?.street?.name}
                </td>
                <td className={styles.tableData} data-title="City">
                  {elem?.location?.city}
                </td>
                <td className={styles.tableData} data-title="State">
                  {elem?.location?.state}
                </td>
                <td className={styles.tableData} data-title="Country">
                  {elem?.location?.country}
                </td>
                <td className={styles.tableData} data-title="Phone">
                  {elem?.phone}
                </td>
                <td className={styles.tableData} data-title="Age">
                  {elem?.dob?.age}
                </td>
                <td className={styles.tableData} data-title="Date of Birth">
                  {elem?.dob?.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Pagination current={page} totalPages={totalPages} setPage={setPage} data={data} />
    </div>
  );
};

export default UserDetailPage;
