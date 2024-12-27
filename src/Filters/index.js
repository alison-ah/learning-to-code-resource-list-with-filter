import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

const FiltersList = (props) => {
  const renderFilter = (filter) => {
    const isChecked = props.selectedFilters.includes(filter.key);
    return (
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={props.toggleFilter}
      />
    );
  };
  const filterListElements = filterOptions.map(renderFilter);
  return (
    <div className="filters">
      <h2 className="filters__header">Filter By:</h2>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
