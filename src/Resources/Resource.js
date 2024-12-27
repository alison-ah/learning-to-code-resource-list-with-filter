import React from "react";
import Type from "./Type.js";
import SkillcrushFlag from "./SkillcrushFlag.js";

const Resource = (props) => (
  <li className="resource">
    <img
      src={props.resource.imageSrc}
      alt={props.resource.alt}
      className="resource__image"
    />
    <div className="resource__text">
      <div className="resource__header">
        <h3 className="resource__name">{props.resource.name}</h3>
      </div>
      <div className="resource__main">
        <div>
          <span>Skills:</span>
          <Type type="HTML" hasType={props.resource.html} />
          <Type type="CSS" hasType={props.resource.css} />
          <Type type="Accessibility" hasType={props.resource.accessibility} />
          <Type type="JavaScript" hasType={props.resource.javaScript} />
          <Type type="React" hasType={props.resource.react} />
          <Type type="Python" hasType={props.resource.python} />
          <Type type="DataViz" hasType={props.resource.dataViz} />
        </div>
        <div className="resource__main--right">
          <a href={props.resource.url} target="_blank">
            <button className="view_resource">View resource</button>
          </a>
        </div>
      </div>
    </div>
    <SkillcrushFlag skillcrush={props.resource.skillcrush} />
  </li>
);

export default Resource;
