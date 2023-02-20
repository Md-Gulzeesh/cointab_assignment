import React from "react";
import Countries from "../data/countryData.json";
import styles from "./Filter.module.css";
const Filter = ({ filters,handleChange,handleReset }) => {
  return (
    <div className={styles.filterDiv}>
      <input
      value={filters.name}
      name="name"
        onChange={handleChange}
        className={styles.inputTag}
        type="text"
        placeholder="Seach by name"
      />
      <select
        value={filters.gender}
        onChange={handleChange}
        className={styles.selectTag}
        name="gender"
      >
        <option value="">Choose the gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select
        onChange={handleChange}
        value={filters.age}
        className={styles.selectTag}
        name="age"
      >
        <option value="">Choose the age</option>
        <option value="b20">Below 20</option>
        <option value="m20_b40">More than 20 and Below 40</option>
        <option value="b40">Below 40</option>
      </select>
      <select
        onChange={handleChange}
        value={filters.sort}
        className={styles.selectTag}
        name="sort"
      >
        <option value="">Sort by name</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select
        onChange={handleChange}
        value={filters.country}
        className={styles.selectTag}
        name="country"
      >
        <option value="">Choose country</option>
        {Countries.map((elem, index) => (
          <option value={elem.name} name={elem.name} key={index}>
            {elem.name}
          </option>
        ))}
      </select>
      <button onClick={handleReset} className={styles.filterResetBtn}>Reset</button>
    </div>
  );
};

export default Filter;
