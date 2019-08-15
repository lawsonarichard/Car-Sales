import { REMOVE_FEATURE, ADD_FEATURE } from "../reducers";

export const addFeature = item => {
  console.log("Add this part", item);
  return {
    type: "ADD_FEATURE",
    payload: item
  };
};

export const removeFeature = id => {
  console.log("Remove this part", id);
  return {
    type: "REMOVE_FEATURE",
    payload: id
  };
};
