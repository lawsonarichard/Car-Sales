import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { removeFeature, addFeature } from "./actions";

const App = ({ additionalPrice, car, store, removeFeature, addFeature }) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addFeature={addFeature} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ additionalPrice, car, store }) => {
  return {
    additionalPrice: additionalPrice,
    car: car,
    store: store
  };
};
export default connect(
  mapStateToProps,
  { removeFeature, addFeature }
)(App);
