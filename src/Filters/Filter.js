import React from "react";
import { resources } from "../data.js";

const getMatchCount = (filterKey) =>
  resources.filter((resource) => resource[filterKey]).length;

const Filter = (props) => {
  const onChange = () => props.toggleFilter(props.filter.key);
  const matchCount = getMatchCount(props.filter.key);
  return (
    <li className="filter">
      <label htmlFor={props.filter.display}>
        <input
          type="checkbox"
          id={props.filter.display}
          checked={props.isChecked}
          onChange={onChange}
          className="filter__checkbox"
        />
        <span>{props.filter.display}</span>
      </label>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;
