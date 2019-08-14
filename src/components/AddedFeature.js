import React from "react";
import { Button } from "shards-react";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <Button
        className="button"
        onClick={() => {
          props.removeFeature(props.feature.name);
        }}
      >
        Remove
      </Button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
