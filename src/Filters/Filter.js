import React from "react";
import { resources } from "../data.js";

const getMatchCount = (filterKey) =>
  resources.filter((resource) => resource[filterKey]).length;

const Filter = (props) => {
  const onChange = () => props.toggleFilter(props.filter.key);
  const matchCount = getMatchCount(props.filter.key);
  return (
    <li className="filter">
      <span>
        <input
          type="checkbox"
          label={props.filter.display}
          id={props.filter.display}
          checked={props.isChecked}
          onChange={onChange}
          className="filter__checkbox"
        />
        <span label={props.filter.display}>{props.filter.display}</span>
      </span>
      <span className="filter__match-count" label={props.filter.display}>{matchCount}</span>
    </li>
  );
};

export default Filter;
