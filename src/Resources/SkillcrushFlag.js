import React from "react";

const SkillcrushFlag = (props) => {
  if (props.skillcrush) {
    return (
      <span className="skillcrush-flag">
        Made by <i>Skillcrush</i>
      </span>
    );
  } else {
    return null;
  }
};

export default SkillcrushFlag;
