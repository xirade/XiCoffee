// constants
import { ADD_TO_CART, CLEAR_CART, DATE_FORMAT } from "../constants/cart_vars";
import {getDate} from "../utils/useDate";

const initialState = [];

// initializing localStorage
export const initCart = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("cart")) || initialValue;

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // looking for the index of the current object
      const objIndex = state.findIndex((obj) => {
        return obj.payload._id === payload._id;
      });
      // check if it exist
      if (objIndex >= 0) {
        const newArray = [...state];
        newArray[objIndex] = {
          ...state[objIndex],
          quantity: state[objIndex].quantity + 1,
        };
        return newArray;
      }
      // in case if it doesn't exist
      return [
        ...state,
        {
          payload,
          quantity: 1,
          date: getDate(DATE_FORMAT),
        },
      ];

    case CLEAR_CART:
      return initialState;

    default:
      throw new Error();
  }
};
