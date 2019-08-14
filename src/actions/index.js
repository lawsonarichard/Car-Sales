export const removeFeature = feature => {
  console.log("Remove this part", feature);
  return {
    type: "REMOVE_FEATURE",
    payload: feature
  };
};

export const addFeature = item => {
  console.log("Add this part", item);
  return {
    type: "ADD_FEATURE",
    payload: item
  };
};
