import React from "react";

import Hotspot from "./Hotspot";
import AddHotspot from "../containers/AddHotspot";

// first two args come from mapStateToProps
// second two args - w. 'on' prefix - come from mapDispatchToProps
const Figure = ({ hotspots, imageURL, onFigureClick, onHotspotDrop }) => {
  return (
    <figure
      className="post"
      style={{ backgroundImage: `url(${imageURL})` }}
      onClick={event => {
        onFigureClick(event, hotspots);
      }}
      onDragOver={event => {
        event.preventDefault();
        return;
      }}
      onDrop={event => {
        onHotspotDrop(event);
      }}
    >
      <img className="post-img" src={imageURL} />
      {hotspots.map((hotspot, index) => (
        <Hotspot key={index} index={index} hotspot={hotspot} />
      ))}
    </figure>
  );
};

export default Figure;
