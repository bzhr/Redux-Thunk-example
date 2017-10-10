import { connect } from "react-redux";
import { addHotspot, dropHotspot } from "../actions/index";

import Figure from "../components/Figure";

function getHotspots(media) {
  if (media.enable_hotspots || media.products.length > 1) {
    return media.products;
  }
  return [];
}

const mapStateToProps = ({ media }) => {
  return {
    hotspots: getHotspots(media),
    imageURL: media.image_url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFigureClick: (event, hotspots) => {
      dispatch(addHotspot(event, hotspots));
    },
    onHotspotDrop: event => {
      dispatch(dropHotspot(event));
    }
  };
};

const Media = connect(mapStateToProps, mapDispatchToProps)(Figure);

export default Media;
