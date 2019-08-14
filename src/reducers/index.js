import { removeFeature } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state, // pulls the inital state
        car: {
          // gives the CAR array
          ...state.car, // pulls the car object into state
          features: [
            // pulls the car features array into an array
            ...state.car.features,
            action.payload ///pulls the features from car
          ]
        },
        additionalPrice: state.additionalPrice + action.payload.price //add the price of the car with the price of the payload feature
      };

    default:
      return state;
  }
};
