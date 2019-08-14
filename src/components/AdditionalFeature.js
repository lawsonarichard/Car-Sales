import React from "react";
import { Button } from "shards-react";
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <Button
        className="button"
        onClick={() => {
          props.addFeature({
            name: props.feature.name,
            price: props.feature.price
          });
        }}
      >
        Add
      </Button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
