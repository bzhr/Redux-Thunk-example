import { connect } from "react-redux";
import { changeURL, shouldFetchUrl } from "../actions/index";

import Input from "../components/Input";

const mapStateToProps = ({ media }, { index }) => {
  return {
    value: media.products[index].url
  };
};


// const mapDispatchToProps = (dispatch, { index }) => {
//   return {
//
//     onChange: event => {
//       setTimeout( () => {
//         dispatch(changeURL(event, index));
//       }, 500)
//     }
//   };
// };

const mapDispatchToProps = (dispatch, { index }) => {
  return {

    onChange: event => {
        dispatch(changeURL(event, index));
        dispatch(shouldFetchUrl(event, index))
    }
  };
};

const URLInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default URLInput;
