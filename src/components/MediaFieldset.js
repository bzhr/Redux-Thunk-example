import React from "react";
import DeleteHotspot from "../containers/DeleteHotspot";
import URLInput from "../containers/URLInput";
import TitleInput from "../containers/TitleInput";
import LoadingIndicator from "../containers/LoadingIndicator";

import UrlLoader from "./UrlLoader";


const MediaFieldset = ({ product, index }) => {

  const loadingIndicator = product.urlLoader
  const disableInput = product.disableInput

  const idPrefix = `post_products_${index}`;
  const namePrefix = `post[products][${index}]`;

  return (
    <fieldset className="my-4">
      {product.id && (
        <input type="hidden" value={product.id} name={`${namePrefix}[id]`} />
      )}

      <input
        type="hidden"
        value={index + 1}
        id={`${idPrefix}_index`}
        name={`${namePrefix}[index]`}
      />
      <input
        type="hidden"
        value={product.x}
        id={`${idPrefix}_x`}
        name={`${namePrefix}[x]`}
      />
      <input
        type="hidden"
        value={product.y}
        id={`${idPrefix}_y`}
        name={`${namePrefix}[y]`}
      />

      <div className="form-row mb-2">
        <div className="col-2">
          <input
            className="form-control text-center"
            type="text"
            defaultValue={product.index || index + 1}
          />
        </div>

        <div className="col-8">
          <URLInput
            type="url"
            className="form-control"
            id={`${idPrefix}_url`}
            index={index}
            name={`${namePrefix}[url]`}
            placeholder="URL"
            required
          />
        </div>

        <div className="col-2">
          <UrlLoader  isLoading={loadingIndicator}/>
        </div>

        {/*<div className="col-2">"Spec 4: Spinner" goes here</div>*/}
      </div>

      <div className="form-row">
        <div className="col-2 text-center">
          <DeleteHotspot
            content={<i className="material-icons md-18">close</i>}
            className="btn btn-link text-danger"
            index={index}
          />
        </div>

        <div className="col-8">
          <TitleInput
            type="text"
            className="form-control"
            id={`${idPrefix}_title`}
            index={index}
            name={`${namePrefix}[title]`}
            placeholder="Title"
            required
            disabled={disableInput}
          />
        </div>

        <div className="col-2" />
      </div>
    </fieldset>
  );
};

export default MediaFieldset;
