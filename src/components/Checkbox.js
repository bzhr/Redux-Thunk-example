import React from "react";

const Checkbox = ({ disabled, onChange, content, name, value }) => (
  <label className="custom-control custom-checkbox">
    <input type="hidden" name="post[enable_hotspots]" value={value} />

    <input
      className="custom-control-input"
      disabled={disabled}
      type="checkbox"
      name={name}
      value={value}
      checked={value}
      onChange={event => {
        onChange();
      }}
    />
    <span className="custom-control-indicator" />
    <span className="custom-control-description">
      {content} {value ? "On" : "Off"}
    </span>
  </label>
);

export default Checkbox;
