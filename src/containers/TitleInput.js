import { connect } from "react-redux";
import { changeTitle } from "../actions/index";

import Input from "../components/Input";

const mapStateToProps = ({ media }, { index }) => {
  return {
    value: media.products[index].title
  };
};

const mapDispatchToProps = (dispatch, { index }) => {
  return {
    onChange: event => {
      dispatch(changeTitle(event, index));
    }
  };
};

const TitleInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default TitleInput;
