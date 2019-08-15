import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { removeFeature, addFeature } from "./actions";

const App = props => {
  const removeFeature = id => {
    props.removeFeature(id);
  };

  const addFeature = item => {
    props.addFeature(item);
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};
export default connect(
  mapStateToProps,
  { removeFeature, addFeature }
)(App);
