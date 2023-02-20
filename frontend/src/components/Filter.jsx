import React from "react";
import Countries from "../data/countryData.json";
import styles from "./Filter.module.css";
const Filter = () => {
  return (
    <div className={styles.filterDiv}>
      <input className={styles.inputTag} type="text" placeholder="Seach by name" />
      <select className={styles.selectTag} name="gender" id="">
        <option value="">Choose the gender</option>
        <option value="male">Men</option>
        <option value="female">Women</option>
      </select>
      <select className={styles.selectTag} name="age" id="">
        <option value="">Choose the age</option>
        <option value="b20">Below 20</option>
        <option value="m20_b40">More than 20 and Below 40</option>
        <option value="b40">Below 40</option>
      </select>
      <select className={styles.selectTag} name="sort" id="">
        <option value="">Sort by name</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select className={styles.selectTag} name="country" id="">
        <option value="">Choose country</option>
        {Countries.map((elem, index) => (
          <option value={elem.name} name={elem.name} key={index}>
            {elem.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
