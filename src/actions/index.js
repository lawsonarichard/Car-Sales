export const removeFeature = name => {
  console.log("Remove this part", name);
  return {
    type: "REMOVE_FEATURE",
    payload: name
  };
};

export const addFeature = item => {
  console.log("Add this part", item);
  return {
    type: "ADD_FEATURE",
    payload: item
  };
};
