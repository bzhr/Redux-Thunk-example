import React from "react";

var Spinner = require('react-spinkit');

const UrlLoader = ({ isLoading }) => {
  if (isLoading) {
    return <Spinner color="blue" />
  }
  return (
    <div>Loaded!</div>
  );
};

export default UrlLoader
