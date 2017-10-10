import { connect } from "react-redux";

import Form from "../components/Form";

const mapStateToProps = ({ media, form }) => {
  return {
    form: form,
    media: media
  };
};

const MediaForm = connect(mapStateToProps)(Form);

export default MediaForm;
