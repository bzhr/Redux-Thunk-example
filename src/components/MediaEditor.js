import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import Media from "../containers/Media";
import AddHotspot from "../containers/AddHotspot";
import MediaForm from "../containers/MediaForm";

import mediaApp from "../reducers/index";

// const middleware = [ thunk ]

function configureStore(initialState) {
  return createStore(mediaApp,
                     initialState,
                     applyMiddleware(thunk)
  );
}

class MediaEditor extends React.Component {
  constructor(props) {
    super(props);
    const initialState = props;
    this.store = configureStore(initialState);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <Media />
            </div>
            <div className="col">
              <MediaForm />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default MediaEditor;
