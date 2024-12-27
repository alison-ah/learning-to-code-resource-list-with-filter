import React from "react";

const Type = (props) => {
  if (props.hasType) {
    return <span className="type">{props.type}</span>;
  } else {
    return null;
  }
};

export default Type;
