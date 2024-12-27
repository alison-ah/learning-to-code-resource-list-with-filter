import React from "react";
import Resource from "./Resource.js";
import { resources } from "../data.js";

const renderResource = (resource) => (
  <Resource key={resource.id} resource={resource} />
);

const ResourceList = (props) => {
  const filterCallback = (resource) => {
    const everyCallback = (filter) => resource[filter];
    return props.selectedFilters.every(everyCallback);
  };
  const filteredResources = resources.filter(filterCallback);

  const resourceListElements = filteredResources.map(renderResource);
  return <ul className="resource-list">{resourceListElements}</ul>;
};

export default ResourceList;
