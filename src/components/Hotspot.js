import React from "react";

const Hotspot = ({ index, hotspot }) => (
  <span
    className="hotspot hotspot-md post-editor-hotspot"
    draggable="true"
    style={{ left: hotspot.x + "%", top: hotspot.y + "%" }}
    onDragStart={event => {
      event.dataTransfer.setData("text/plain", index);
    }}
  >
    {index + 1}
  </span>
);

export default Hotspot;
