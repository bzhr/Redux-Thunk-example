import React from "react";
import ReactDOM from "react-dom";

import MediaEditor from "./components/MediaEditor";

window.Components = {
  MediaEditor
};

// This script looks for React element
// with JSON, then mounts it to a target div.
//

// Element contains: "Components.MediaEditor" which is evaluated as code
const element = document.querySelector("[data-react-class]");
const targetDiv = document.getElementById(element.dataset.reactTargetId);

let reactProps;

if (element.dataset.reactProps) {
  reactProps = element.dataset.reactProps;
} else {
  reactProps = "{}";
}

const initialState = JSON.parse(reactProps)

const reactElement = React.createElement(
  eval(element.dataset.reactClass),
  initialState
);

ReactDOM.render(reactElement, targetDiv);
