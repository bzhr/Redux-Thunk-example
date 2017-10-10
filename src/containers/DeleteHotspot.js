import { connect } from "react-redux";
import { deleteHotspot } from "../actions/index";

import Button from "../components/Button";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, { index }) => {
  return {
    onClick: () => {
      dispatch(deleteHotspot(index));
    }
  };
};

const DeleteHotspot = connect(mapStateToProps, mapDispatchToProps)(Button);

export default DeleteHotspot;
