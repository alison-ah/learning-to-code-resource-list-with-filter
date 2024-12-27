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
          checked={props.isChecked}
          onChange={onChange}
          className="filter__checkbox"
          labelfor={props.filter.key}
          id={props.filter.key}
        />
        {props.filter.display}
      </span>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;
