import { connect } from "react-redux";

import UrlLoader from "../components/UrlLoader";

const mapStateToProps = loadingIndicator => {
  console.log("LoadingIndicator",loadingIndicator)
  return { isLoading: loadingIndicator };
};

const LoadingIndicator = connect(mapStateToProps)(UrlLoader);

export default LoadingIndicator
