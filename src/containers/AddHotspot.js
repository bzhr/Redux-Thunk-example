import { connect } from "react-redux";
import { addRandomHotspot } from "../actions/index";

import Button from "../components/Button";

const mapStateToProps = ({ media }) => {
  return {
    disabled: media.products.length >= 10
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(addRandomHotspot());
    }
  };
};

const AddHotspot = connect(mapStateToProps, mapDispatchToProps)(Button);

export default AddHotspot;
