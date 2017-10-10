import React from "react";

import MediaFieldset from "./MediaFieldset";
import ToggleHotspots from "../containers/ToggleHotspots";
import AddHotspot from "../containers/AddHotspot";

const Form = ({ media, form }) => {
  return (
    <form action={form.action} method="post">
      <input name="_utf8" type="hidden" value="✓" />
      <input name="_method" type="hidden" value={form.method} />
      <input name="_csrf_token" type="hidden" value={form.csrf_token} />

      <div className="card-body m-3">
        <div className="mb-4">
          <AddHotspot content="Add Hotspot" className="btn btn-primary mr-3" />
          <ToggleHotspots content="Hotspots" name="post[enable_hotspots]" />
        </div>

        {media.products.map((product, index) => (
          <MediaFieldset key={index} product={product} index={index} />
        ))}

        {media.products.length == 0 && (
          <p className="lead">Click the image to tag your products.</p>
        )}

        <div className="form-group mt-3">
          <label htmlFor="post_caption">Caption</label>
          <textarea
            defaultValue={media.caption}
            className="form-control"
            rows="3"
            id="post_caption"
            name="post[caption]"
            rows="5"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Save" />
      </div>
    </form>
  );
};

export default Form;
