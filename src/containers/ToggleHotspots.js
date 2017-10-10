import { connect } from "react-redux";
import { toggleHotspots } from "../actions/index";

import Checkbox from "../components/Checkbox";

const mapStateToProps = ({ media }) => {
  return {
    disabled: media.products.length > 1,
    value: media.products.length > 1 ? true : media.enable_hotspots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: () => {
      dispatch(toggleHotspots());
    }
  };
};

const ToggleHotspotsCheckbox = connect(mapStateToProps, mapDispatchToProps)(
  Checkbox
);

export default ToggleHotspotsCheckbox;
