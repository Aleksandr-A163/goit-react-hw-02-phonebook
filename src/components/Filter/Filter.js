import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ value, changeFilterInput }) => (
  <label className={styles.labelFind}>
    <span className={styles.spanFind}>Find contacts by name</span>
    <input
      className={styles.inputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);
export default Filter;
